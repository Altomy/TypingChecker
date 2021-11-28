/** MyResults.tsx */

// ========== Imports ========== //
import React, { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import { Box, HStack, Icon, Text, ScrollView } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import assets from "assets";
import ResultBox from "./components/ResultBox";
import useStorageOrms from "hooks/useStorageOrms";
import TransparentCard from "components/Cards/TransparentCard";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import { AdMobBanner } from "expo-ads-admob";
import ads from "utils/ads";
import { useAuth } from "context/AuthProvider";

// ========== propsTypes ========== //
export type propsTypes = {
  navigation: StackNavigationProp<RootStackParamList, "MyResults">;
};

/** MainFunction */
let MyResults: React.FC<propsTypes> = (props) => {
  /** @kind: Props */
  let { getAllValues } = useStorageOrms();
  /** @kind: Hooks */

  let [myResults, setMyResults] = useState<ResultType[]>([]);

  let { Auth } = useAuth();

  let { t } = useTranslation("translation", { keyPrefix: "myResult" });

  let [objective, setObjective] = useState({
    words: 0,
    minutes: 0,
  });

  let builder = React.useCallback(async () => {
    let results = await getAllValues<ResultType>("@TC/Results");
    if (results) {
      setMyResults(results);

      let words = 0;
      let minutes = 0;

      results.forEach((result) => {
        words = words + result.values.words;
        let time = result.time.split(" ");
        let fixedTime = parseInt(time[0]);
        minutes = minutes + fixedTime;
      });

      setObjective({ ...objective, words: words, minutes: minutes });
    }
  }, []);
  useEffect(() => {
    builder();
  }, []);

  /** @kind: Methods */

  /** @kind: Views */

  // ==== RETURN METHOD ==== //
  return (
    <Box flex={1} safeAreaTop>
      <ImageBackground
        style={{ flex: 1 }}
        source={assets.background.boxBackground}
      >
        <Box
          flexDir={"row"}
          justifyContent={"space-between"}
          p={1}
          alignItems={"center"}
          pb={0}
          mt={2}
        >
          <Icon
            as={<Ionicons name="close-circle" />}
            size={"lg"}
            onPress={() => {
              props.navigation.goBack();
            }}
            color="muted.900"
          />
        </Box>
        <Box flexDir={"row"} alignItems={"center"} justifyContent={"center"}>
          <Text fontSize="3xl" color="white" bold>
            {t`title`}
          </Text>
        </Box>

        <Box flex={1} mt={4} pt={3}>
          <AdMobBanner
            adUnitID={ads.banner}
            servePersonalizedAds={Auth.ads}
            bannerSize="smartBannerPortrait"
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <HStack alignItems={"center"} space={2} mx={1} mb={2} mt={3}>
              <Box flex={1}>
                <TransparentCard
                  icon={<Ionicons name="text" />}
                  iconStyle={{ color: "purple.700" }}
                  title={objective.words.toString() + " " + t`words`}
                  subtitle={t`wordsTyped`}
                  onPress={() => {}}
                />
              </Box>
              <Box flex={1}>
                <TransparentCard
                  iconStyle={{ color: "purple.700" }}
                  icon={<Ionicons name="time" />}
                  title={objective.minutes.toString() + " " + t`minutes`}
                  subtitle={t`typedMinute`}
                  onPress={() => {}}
                />
              </Box>
            </HStack>
            {myResults.map((trg, index) => (
              <ResultBox
                key={index}
                success={trg.values.success}
                errors={trg.values.errors}
                words={trg.values.words}
                wordPerSeconds={trg.values.wordsPerSecond}
              />
            ))}
          </ScrollView>
        </Box>
      </ImageBackground>
    </Box>
  );
};

export default MyResults;
