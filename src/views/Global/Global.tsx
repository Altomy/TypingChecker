/** Global.tsx */

// ========== Imports ========== //
import React, { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  ScrollView,
  Select,
  Spinner,
  Text,
  useToast,
} from "native-base";
import assets from "assets";
import { Ionicons } from "@expo/vector-icons";
import ListedMenu, { ListType } from "components/ListedMenu";
import fetcher from "utils/fetcher";
import * as Cellular from "expo-cellular";
import useToggle from "hooks/useToggle";
import BottomSheet from "components/BottomSheet";
import Selector from "components/Selector/Selector";
import { StackNavigationProp } from "@react-navigation/stack";
import countries from "../../utils/countries";
import { useTranslation } from "react-i18next";
import { useAuth } from "context/AuthProvider";
import { AdMobBanner } from "expo-ads-admob";
import ads from "utils/ads";

// ========== propsTypes ========== //
export type propsTypes = {
  navigation: StackNavigationProp<RootStackParamList, "Global">;
};

/** MainFunction */
let Global: React.FC<propsTypes> = (props) => {
  /** @kind: Props */

  /** @kind: Hooks */

  let [list, setList] = React.useState<ListType[]>([]);

  let { t } = useTranslation("translation", { keyPrefix: "global" });

  let [isLoading, toggleIsLoading] = useToggle(true);

  let [showFilter, setShowFilter] = useToggle();

  let { Auth } = useAuth();

  let toast = useToast();
  let build = async () => {
    let { data, error } = await fetcher.get<ServerType[]>("/typecheck/index");
    if (error) {
      toast.show({
        status: "error",
        title: t`error`,
      });
    }

    let resultFromData: ListType[] = data.map((_data, index) => {
      let flagUri = require("../../assets/flags/other.png");

      let flag = countries.find(
        (country) => country.code.toLowerCase() == _data.country
      );
      if (flag) {
        flagUri = flag.flag;
      }
      return {
        title: _data.name,
        icon: (
          <HStack mx={1} alignItems={"center"}>
            <Text fontSize="lg" mr={1} color="black" bold>
              {index + 1}.
            </Text>
            <Image
              alt="flag"
              mr={0.5}
              source={flagUri}
              height={6}
              width={6}
              resizeMode="contain"
            />
          </HStack>
        ),
        leftElement: (
          <Text color="black" bold>
            {_data.wordPerSecond} {t`words`}/s
          </Text>
        ),
      };
    });

    setList(resultFromData);

    toggleIsLoading();

    let language = await Cellular.getIsoCountryCodeAsync();
    if (!language) {
      language = "other";
    }

    setFilter({ ...filter, country: language });
  };

  let [filter, setFilter] = useState<{ examType: ExamType; country: string }>({
    examType: "Easy",
    country: "",
  });

  useEffect(() => {
    build();
  }, []);

  let searchWithFilter = async () => {
    setShowFilter();
    let { data, error } = await fetcher.post<ServerType[]>(
      "/typecheck/index/with_filter",
      filter
    );
    if (error) {
      toast.show({
        title: t`error`,
        status: "error",
      });
      return;
    }

    let resultFromData: ListType[] = data.map((_data, index) => {
      let flagUri = require("../../assets/flags/other.png");

      let flag = countries.find(
        (country) => country.code.toLowerCase() == _data.country
      );
      if (flag) {
        flagUri = flag.flag;
      }
      return {
        title: _data.name,
        icon: (
          <HStack mx={1} alignItems={"center"}>
            <Text fontSize="lg" mr={1} color="black" bold>
              {index + 1}.
            </Text>
            <Image
              alt="flag"
              mr={0.5}
              source={flagUri}
              height={6}
              width={6}
              resizeMode="contain"
            />
          </HStack>
        ),
        leftElement: (
          <Text color="black" bold>
            {_data.wordPerSecond} {t`words`}/s
          </Text>
        ),
      };
    });

    setList(resultFromData);
  };

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
          <Icon
            as={<Ionicons name="filter" />}
            size={"md"}
            onPress={() => {
              setShowFilter();
            }}
            color="muted.900"
          />
        </Box>
        <Box flexDir={"row"} alignItems={"center"} justifyContent={"center"}>
          <Text fontSize="3xl" color="white" bold>
            {t`title`}
          </Text>
        </Box>
        <AdMobBanner
          adUnitID={ads.banner}
          bannerSize="smartBannerPortrait"
          servePersonalizedAds={Auth.ads}
        />
        {!isLoading && (
          <Box bgColor={"purple.100:alpha.30"} flex={1} mt={4} pt={3}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {list.length !== 0 && (
                <ListedMenu
                  titleStyles={{ fontSize: "lg" }}
                  listBoxStyles={{ px: 0.5 }}
                  lists={list}
                />
              )}
              {list.length == 0 && (
                <Box flex={1} alignItems={"center"} justifyContent={"center"}>
                  <Text color="white" textAlign={"center"}>
                    {t`empty`}
                  </Text>
                </Box>
              )}
            </ScrollView>
          </Box>
        )}
        {isLoading && (
          <Box flex={1} justifyContent={"center"} alignItems={"center"}>
            <Spinner size="lg" color="purple" />
          </Box>
        )}

        {showFilter && (
          <BottomSheet
            onClose={() => {
              setShowFilter();
            }}
            headerTitle="Filter"
            headerSubTitle="Filter the result"
          >
            <Box bgColor="dark.100" py={8} pb={5}>
              <Selector
                title={t`level`}
                list={["Easy", "Normal", "Hard"]}
                onChange={(text) => {
                  setFilter({ ...filter, examType: text as ExamType });
                }}
              />
              <Box height={7}></Box>
              <Select
                _text={{ color: "white" }}
                color="white"
                selectedValue={filter.country}
                onValueChange={(value) => {
                  setFilter({ ...filter, country: value });
                }}
                mx={2}
              >
                {countries.map((country, index) => (
                  <Select.Item
                    key={index}
                    value={country.code.toLowerCase()}
                    label={country.name}
                  ></Select.Item>
                ))}
              </Select>
              <Box height={7}></Box>
              <Button colorScheme="purple" onPress={searchWithFilter}>
                {t`showResult`}
              </Button>
            </Box>
          </BottomSheet>
        )}
      </ImageBackground>
    </Box>
  );
};

export default Global;
