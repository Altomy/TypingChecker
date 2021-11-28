/** ExamResult.tsx */

// ========== Imports ========== //
import React, { useEffect } from "react";
import { ImageBackground, useWindowDimensions } from "react-native";
import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  Text,
  useToast,
  IBoxProps,
} from "native-base";
import assets from "assets";
import { Ionicons } from "@expo/vector-icons";
import TransparentCard from "components/Cards/TransparentCard";
import { useExam } from "context/ExamProvider";
import useStorageOrms from "hooks/useStorageOrms";
import useToggle from "hooks/useToggle";
import AnimatedFixBox from "components/AnimatedFixBox";
import useStorageState from "hooks/useStorageState";
import fetcher from "utils/fetcher";
import { StackNavigationProp } from "@react-navigation/stack";

import * as Cellular from "expo-cellular";
import { useTranslation } from "react-i18next";
import useAnalytics from "hooks/useAnalytics";
import useAds from "hooks/useAds";
import ads from "utils/ads";
import { useAuth } from "context/AuthProvider";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

let AnimatedBox = Animated.createAnimatedComponent<IBoxProps>(Box);

// ========== propsTypes ========== //
export type propsTypes = {
  navigation: StackNavigationProp<RootStackParamList, "ExamResult">;
};

/** MainFunction */
let ExamResult: React.FC<propsTypes> = (props) => {
  /** @kind: Props */
  /** @kind: Hooks */
  let { height, width } = useWindowDimensions();
  let animateValue = useSharedValue(0);

  let animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: animateValue.value }],
    };
  });

  let { Exam } = useExam();
  let { t } = useTranslation("translation", { keyPrefix: "examResult" });

  let [showDialog, toggleShowDialog] = useToggle();

  let [name, setName] = useStorageState("@TC/name");

  let { createValue } = useStorageOrms();

  let { examValue, examType, examTime } = Exam;

  let getTime = React.useCallback(() => {
    let currentTime = examTime.split(" ");
    return parseInt(currentTime[0]) * 60;
  }, []);

  let getResults = React.useCallback(() => {
    let _text = examValue.text.split(" ");
    let _values = examValue.value.split(" ");

    _text = _text.map((_t) => _t.toLowerCase());
    _values = _values.map((_v) => _v.toLowerCase());

    let _success = 0;
    let _error = 0;
    let _words = 0;

    _values.forEach((_val, index) => {
      if (_text[index] == _val) {
        _success = _success + 1;
      } else {
        if (_val !== "") {
          _error = _error + 1;
        }
      }

      if (_val !== "") {
        _words = _words + 1;
      }
    }); // end for each

    let success = _success.toString();
    let error = _error.toString();
    let words = _words.toString();

    let _wordsPerSecond = _words / getTime();
    let wordsPerSecond = _wordsPerSecond.toFixed(2);

    return {
      success,
      error,
      words,
      wordsPerSecond,
    };
  }, []);

  let store = React.useCallback(async () => {
    let data: ResultType = {
      createdAt: new Date(),
      type: examType,
      time: examTime,
      values: {
        success: parseInt(getResults().success),
        words: parseInt(getResults().words),
        errors: parseInt(getResults().error),
        wordsPerSecond: parseFloat(getResults().wordsPerSecond),
      },
    };
    await createValue(data, "@TC/Results");
  }, []);

  let toast = useToast();

  let share = async () => {
    let language = await Cellular.getIsoCountryCodeAsync();
    if (!language) {
      language = "other";
    }

    let _data: ServerType = {
      examType: examType,
      examTime: examTime,
      success: getResults().success,
      errors: getResults().error,
      words: getResults().words,
      wordPerSecond: getResults().wordsPerSecond,
      name: name,
      country: language,
    };

    let { error } = await fetcher.post<ServerType>("/typecheck/store", _data);
    if (error) {
      toast.show({
        status: "error",
        title: t`errors.title`,
        description: t`errors.description`,
      });
      return;
    }
    toast.show({
      status: "success",
      title: t`success.title`,
      description: t`success.description`,
    });
    toggleShowDialog();
    props.navigation.navigate("Home");
  };

  let { createAnalyticsEvent } = useAnalytics();

  let onCreate = async () => {
    await createAnalyticsEvent("finishExam", "ExamResults");
  };

  let { showInterstitial } = useAds();
  let { Auth } = useAuth();

  let callAds = async () => {
    await showInterstitial(ads.results ? ads.results : "", Auth.ads);
  };

  useEffect(() => {
    onCreate();
    callAds();

    store();
  }, []);

  useEffect(() => {
    animateValue.value = withTiming(1.3);
    setTimeout(() => {
      animateValue.value = withTiming(1);
    }, 300);
  }, []);

  // ==== RETURN METHOD ==== //
  return (
    <Box flex={1} safeAreaTop>
      <ImageBackground
        style={{ flex: 1 }}
        source={assets.background.boxBackground}
      >
        <Box flexDir={"row"} p={1} pb={0} mt={2}>
          <Icon
            as={<Ionicons name="close-circle" />}
            size={"lg"}
            color="muted.900"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
        </Box>
        <Box flexDir={"row"} alignItems={"center"} justifyContent={"center"}>
          <Text fontSize="3xl" color="white" bold>
            {t`title`}
          </Text>
        </Box>
        <AnimatedBox
          mx={1}
          height={height / 3.5}
          mt={3}
          borderRadius={2}
          bgColor={"muted.100"}
          style={animatedStyles}
        >
          <Box flex={1} p={1}>
            <Text>{examValue.value}</Text>
          </Box>
        </AnimatedBox>
        <HStack alignItems={"center"} space={2} mx={1} mt={12}>
          <Box flex={1}>
            <TransparentCard
              icon={<Ionicons name="checkmark" />}
              title={getResults().success + " " + t`words`}
              titleStyles={{ color: "success.500" }}
              subtitle={t`rightWords`}
            />
          </Box>
          <Box flex={1}>
            <TransparentCard
              icon={<Ionicons name="alert" />}
              titleStyles={{ color: "error.500" }}
              title={getResults().error + " " + t`words`}
              subtitle={t`errorWords`}
            />
          </Box>
        </HStack>
        <HStack alignItems={"center"} space={2} mx={1} mt={2}>
          <Box flex={1}>
            <TransparentCard
              icon={<Ionicons name="text" />}
              titleStyles={{ color: "blue.600" }}
              title={getResults().words + " " + t`words`}
              subtitle={t`totalWords`}
            />
          </Box>
          <Box flex={1}>
            <TransparentCard
              icon={<Ionicons name="bar-chart" />}
              titleStyles={{ color: "blue.600" }}
              title={getResults().wordsPerSecond + " " + t`words` + "/s"}
              subtitle={t`wordPerSecond`}
            />
          </Box>
        </HStack>
        <Button
          mt={6}
          mx={1}
          colorScheme="purple"
          onPress={() => {
            toggleShowDialog();
          }}
          _text={{ bold: true }}
          borderRadius={1}
          leftIcon={<Icon as={<Ionicons name="share" />} size={4} />}
        >
          {t`shareButton`}
        </Button>
        {showDialog && (
          <AnimatedFixBox
            onClose={() => {
              toggleShowDialog();
            }}
          >
            <Box
              width="100%"
              height="100%"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                bgColor="white"
                width={width / 1.1}
                p={2}
                borderRadius={5}
                shadow={4}
              >
                <Text fontSize="md" bold>
                  {t`shareYourResult`}
                </Text>
                <Input
                  my={5}
                  value={name}
                  onChangeText={(val) => {
                    setName(val);
                  }}
                  autoFocus
                  autoCorrect={false}
                />
                <Button colorScheme="purple" my={5} onPress={share}>
                  {t`share`}
                </Button>
              </Box>
            </Box>
          </AnimatedFixBox>
        )}
      </ImageBackground>
    </Box>
  );
};

export default ExamResult;
