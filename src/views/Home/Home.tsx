/** Home.tsx */

// ========== Imports ========== //
import React, { useEffect } from "react";
import { ImageBackground } from "react-native";
import { Box, Button, HStack, Icon } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import useLanguagesToggle from "hooks/useLanguagesToggle";
import assets from "assets";
import { Ionicons } from "@expo/vector-icons";
import Titles from "components/Titles/Titles";
import CircleButton from "components/CircleButton/CircleButton";
import TransparentCard from "components/Cards/TransparentCard";
import useToggle from "hooks/useToggle";
import BottomSheet from "components/BottomSheet";
import Selector from "components/Selector/Selector";
import { useExam } from "context/ExamProvider";
import useStorageOrms from "hooks/useStorageOrms";
import SidePanel from "./components/SidePanel";
import AnimatedFixBox from "components/AnimatedFixBox";
import useNotificationHandler from "hooks/useNotificationHandler";
import { useAuth } from "context/AuthProvider";
import fetcher from "utils/fetcher";
import { useTranslation } from "react-i18next";
import useAds from "hooks/useAds";
import { AdMobBanner } from "expo-ads-admob";
import ads from "utils/ads";

// ========== propsTypes ========== //
export type propsTypes = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

/**
 * Home
 *
 * @param props - Props
 * @function
 */
let Home: React.FC<propsTypes> = (props) => {
  /** @kind: Props */
  // let callAlert = () => {
  //   alert("This is how");
  // };
  // let [time, stopTimer] = useTimer(10, callAlert);

  let { t } = useTranslation("translation", { keyPrefix: "home" });

  let { updateExamType, updateExamTime, updateExamLanguage } = useExam();

  let { requestTrackingPermission } = useAds();

  let { dispatchAuth } = useAuth();

  /** @kind: Hooks */

  let { registerForPushNotificationsAsync } = useNotificationHandler(false);

  let enableAdsPersonalize = async () => {
    let result = await requestTrackingPermission();
    dispatchAuth({
      type: "setAds",
      payload: result,
    });
  };

  /** @kind: Methods */
  let { changeLanguage } = useLanguagesToggle();

  let [showBottomSheet, toggleBottomSheet] = useToggle();
  let [showSidePanel, setShowSidePanel] = useToggle();
  let { getAllValues } = useStorageOrms();

  /** @kind: Views */

  let build = async () => {
    let token = await registerForPushNotificationsAsync();
    if (token) {
      dispatchAuth({ type: "setToken", payload: token });
      let _data = {
        token: token,
        userID: 0,
        app: "TypeCheck",
        active: true,
      };

      let { data, error } = await fetcher.post<{
        token: string;
        active: boolean;
      }>("/main/store/notificationToken", _data);
      if (error) {
      }
      if (data) {
        dispatchAuth({ type: "setActiveNotification", payload: data.active });
      }
    }
  };

  useEffect(() => {
    build();
  }, []);

  // ==== RETURN METHOD ==== //
  return (
    <Box safeAreaTop flex={1}>
      <ImageBackground
        style={{ flex: 1 }}
        source={assets.background.boxBackground}
      >
        <Box flexDir={"row"} p={1}>
          <Icon
            onPress={() => {
              setShowSidePanel();
            }}
            as={<Ionicons name="menu-outline" />}
            color="black"
          />
        </Box>
        <Titles
          title={t`title`}
          titleStyle={{ fontSize: "3xl", fontWeight: "bold" }}
          subTitleStyle={{ fontSize: "lg", fontWeight: "bold" }}
          subtitle={t`subtitle`}
        />
        <Box
          flex={1}
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <CircleButton
            title={t`go`}
            onPress={() => {
              enableAdsPersonalize();
              toggleBottomSheet();
            }}
          />
          <HStack alignItems={"center"} space={2} mx={1} mt={12}>
            <Box flex={1}>
              <TransparentCard
                icon={<Ionicons name="globe-outline" />}
                iconStyle={{ color: "purple.700" }}
                title={t`globalResultTitle`}
                subtitle={t`globalResultSubtitle`}
                onPress={() => {
                  props.navigation.navigate("Global");
                }}
              />
            </Box>
            <Box flex={1}>
              <TransparentCard
                iconStyle={{ color: "purple.700" }}
                icon={<Ionicons name="bar-chart-outline" />}
                title={t`myResultTitle`}
                subtitle={t`myResultSubtitle`}
                onPress={() => {
                  props.navigation.navigate("MyResults");
                }}
              />
            </Box>
          </HStack>
          <Box mt={4}>
            <AdMobBanner
              bannerSize="smartBannerPortrait"
              adUnitID={ads.banner}
              servePersonalizedAds={false}
            />
          </Box>
        </Box>

        {showSidePanel && (
          <AnimatedFixBox
            onClose={() => {
              setShowSidePanel();
            }}
          >
            <Box height="100%" width="100%">
              <SidePanel />
            </Box>
          </AnimatedFixBox>
        )}
        {showBottomSheet && (
          <BottomSheet
            headerTitle={t`options.title`}
            headerSubTitle={t`options.subtitle`}
            onClose={() => {
              toggleBottomSheet();
            }}
          >
            <Box bgColor={"dark.50"} py={8} pb={3} px={3}>
              <Selector
                title={t`options.level`}
                list={["Easy", "Normal", "Hard"]}
                onChange={(text) => {
                  updateExamType(text);
                }}
              />
              <Box height={12}></Box>
              <Selector
                title={t`options.time`}
                list={["1 Minute", "2 Minute", "3 Minute"]}
                onChange={(text) => {
                  updateExamTime(text);
                }}
              />
              <Box height={12}></Box>
              <Selector
                title={t`options.textLanguage`}
                list={["en"]}
                onChange={(text) => {
                  updateExamLanguage(text);
                }}
              />
              <Box height={2}></Box>
              <Button
                colorScheme="purple"
                onPress={() => {
                  props.navigation.navigate("Exam");
                }}
              >
                {t`options.start`}
              </Button>
            </Box>
          </BottomSheet>
        )}
      </ImageBackground>
    </Box>
  );
};

export default Home;
