/** Exam.tsx */

// ========== Imports ========== //
import React, { useState, useEffect } from "react";
import { ImageBackground, useWindowDimensions } from "react-native";
import { Box, Icon, ScrollView, Text, TextArea } from "native-base";
import assets from "assets";
import { Ionicons } from "@expo/vector-icons";
import useToggle from "hooks/useToggle";
import useTimer from "hooks/useTimer";
import { StackNavigationProp } from "@react-navigation/stack";
import { useExam } from "context/ExamProvider";
import useTexts from "hooks/useTexts/useTexts";
import { useTranslation } from "react-i18next";
import useAnalytics from "hooks/useAnalytics";

// ========== propsTypes ========== //
export type propsTypes = {
  navigation: StackNavigationProp<RootStackParamList, "Exam">;
};

/**
 * Exam - Exam page
 *
 * @param props - Get the props
 * @function onFinish - When finish exam => toggleDisable(); dispatchExam(); navigate;
 * UseExam - get the exam {@link context/ExamProvider}
 * @hook useTexts - get the exam
 * @returns React.FC<propsTypes>
 */
function Exam(props: React.PropsWithChildren<propsTypes>) {
  /** @kind: Props */

  /** @kind: Hooks */
  let { dispatchExam, Exam } = useExam();
  let { examTime, examType } = Exam;
  let [text] = useTexts(examType, "en");

  let { t } = useTranslation("translation", { keyPrefix: "exam" });

  let { height } = useWindowDimensions();
  let [value, setValue] = useState("");
  let [isDisable, toggleDisable] = useToggle();

  let onFinish = () => {
    toggleDisable();
    dispatchExam({ type: "setExamValue", payload: { value, text } });
    props.navigation.navigate("ExamResult");
  };

  let getTime = React.useCallback(() => {
    let currentTime = examTime.split(" ");
    return parseInt(currentTime[0]) * 60;
  }, []);

  let [timer, setTimer] = useState(getTime());

  let timerInterval: number;

  /**
   * start Timer
   *
   * @function startTimer - check start Timer
   *
   */
  let startTimer = () => {
    timerInterval = setInterval(() => {
      setTimer((oldValue) => {
        oldValue = oldValue - 1;
        return oldValue;
      });
    }, 1000);
  };

  let [firstTime, stopFirstTimer, startFirstTimer] = useTimer(3, () => {
    setShowFirstTimer(false);
    inputRef.current?.focus();
    startTimer();
  });
  let [showFirstTimer, setShowFirstTimer] = useToggle(true);

  let inputRef = React.useRef<any>();

  /** @kind: Methods */

  let filterText = React.useCallback(() => {
    let _text = text.split(" ");
    _text = _text.map((_t) => _t + " ");

    // Get how much typing
    let _howMuchTyping = value.split(" ");

    return _text.splice(_howMuchTyping.length - 1, 6);
  }, [value, text]);

  let { createAnalyticsEvent } = useAnalytics();

  let onCreate = async () => {
    await createAnalyticsEvent("newExam", "Exam");
  };

  React.useEffect(() => {
    startFirstTimer();

    onCreate();

    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      onFinish();
    }
  }, [timer]);
  /** @kind: Views */

  // ==== RETURN METHOD ==== //
  return (
    <Box safeAreaTop flex={1}>
      <ImageBackground
        style={{ flex: 1 }}
        source={assets.background.boxBackground}
      >
        <Box flexDir={"row"} p={1} mt={1}>
          <Icon
            as={<Ionicons name="close-circle" />}
            onPress={() => {
              props.navigation.goBack();
            }}
            size={"lg"}
            color="muted.900"
          />
        </Box>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box alignItems={"center"} justifyContent={"center"}>
            <Text textAlign={"center"} fontSize="2xl" bold color="white">
              {timer}
            </Text>
          </Box>
          <Box py={2} mt={3}>
            <Box
              mx={1}
              px={2}
              bgColor={"muted.100"}
              mb={1}
              py={2}
              borderRadius={1}
              shadow={3}
            >
              <Text fontSize="md" bold color="muted.600">
                <Text fontSize="xl" bold color="blue.600">
                  {filterText()[0]}
                  {""}
                </Text>
                <Text
                  fontSize="sm"
                  bold
                  color="muted.600:alpha.40"
                  letterSpacing={"lg"}
                >
                  {filterText().splice(1, 5)}
                </Text>
              </Text>
            </Box>
            <Box
              mx={1}
              height={height / 3.5}
              borderRadius={1}
              shadow={3}
              bgColor={"muted.100"}
            >
              <Box flex={1}>
                <TextArea
                  p={0}
                  value={value}
                  isDisabled={isDisable}
                  onChangeText={(e) => {
                    setValue(e);
                  }}
                  ref={inputRef}
                  fontWeight={"bold"}
                  autoCorrect={false}
                  m={0}
                  flex={1}
                  fontSize="md"
                  borderWidth={0}
                />
              </Box>
            </Box>
          </Box>
          <Box height={6}></Box>
        </ScrollView>
        {showFirstTimer && (
          <Box
            position={"absolute"}
            left={0}
            top={0}
            height="100%"
            width="100%"
            bgColor={"purple.500:alpha.100"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text textAlign={"center"} fontSize="xl" color="white">
              {t`beReady`}
            </Text>
            <Text textAlign={"center"} fontSize="8xl" bold color="white">
              {firstTime === 0 ? t`go` : firstTime}
            </Text>
          </Box>
        )}
      </ImageBackground>
    </Box>
  );
}

export default Exam;
