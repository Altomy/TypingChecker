/** SidePanel.tsx */

// ========== Imports ========== //
import React from "react";
import { Switch } from "react-native";
import { Box, Icon, Text } from "native-base";
import ListedMenu from "components/ListedMenu";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useAuth } from "context/AuthProvider";
import fetcher from "utils/fetcher";
import useStorageOrms from "hooks/useStorageOrms";
import * as Updates from "expo-updates";
// ========== propsTypes ========== //
export type propsTypes = {};

/** MainFunction */
let SidePanel: React.FC<propsTypes> = (props) => {
  /** @kind: Props */

  /** @kind: Hooks */
  let { t, i18n } = useTranslation("translation", { keyPrefix: "sidePanel" });
  let { removeModel } = useStorageOrms();

  let { Auth, dispatchAuth } = useAuth();

  let navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Home">>();

  /** @kind: Methods */

  let toggleNotification = async (value: boolean) => {
    await fetcher.post("/main/toggle/notificationToken", {
      token: Auth.token,
      active: value,
    });
  };

  let resetData = async () => {
    await removeModel("@TC/Results");
    await Updates.reloadAsync();
  };

  /** @kind: Views */

  // ==== RETURN METHOD ==== //
  return (
    <Box width="60%" bgColor="white" height="100%" style={{ elevation: 4 }}>
      <Text bold m={1}>
        {t`settings`}
      </Text>
      <Box p={3}>
        <ListedMenu
          listBoxStyles={{ py: 1, borderBottomColor: "muted.400" }}
          titleStyles={{ color: "muted.600" }}
          lists={[
            {
              title: t`notifications`,
              icon: (
                <Icon
                  as={<Ionicons name="notifications-outline" />}
                  size={5}
                  color="muted.600"
                  mr={1}
                />
              ),
              leftElement: (
                <Switch
                  value={Auth.activeNotification}
                  onChange={() => {
                    let newValue = !Auth.activeNotification;
                    dispatchAuth({
                      type: "setActiveNotification",
                      payload: newValue,
                    });
                    toggleNotification(newValue);
                  }}
                />
              ),
            },
            {
              title: t`language`,
              icon: (
                <Icon
                  as={<Ionicons name="language-outline" />}
                  size={5}
                  color="muted.600"
                  mr={1}
                />
              ),
              leftElement: (
                <Text bold fontSize={"xs"}>
                  {i18n.language}
                </Text>
              ),
              onPress: () => {
                navigation.navigate("Languages");
              },
            },
            {
              title: t`resetData`,
              icon: (
                <Icon
                  as={<Ionicons name="resize-outline" />}
                  size={5}
                  color="muted.600"
                  mr={1}
                />
              ),
              hasArrow: true,
              onPress: () => {
                resetData();
              },
            },
            {
              title: t`information`,
              icon: (
                <Icon
                  as={<Ionicons name="information-outline" />}
                  size={5}
                  color="muted.600"
                  mr={1}
                />
              ),
              hasArrow: true,
              onPress: () => {
                navigation.navigate("Info");
              },
            },
            {
              title: t`aboutUs`,
              icon: (
                <Icon
                  as={<Ionicons name="information-circle-outline" />}
                  size={5}
                  color="muted.600"
                  mr={1}
                />
              ),
              hasArrow: true,
              onPress: () => {
                navigation.navigate("AboutUs");
              },
            },
            {
              title: t`callUs`,
              icon: (
                <Icon
                  as={<Ionicons name="chatbox-outline" />}
                  size={5}
                  color="muted.600"
                  mr={1}
                />
              ),
              hasArrow: true,
              onPress: () => {
                navigation.navigate("CallUs");
              },
            },
          ]}
        ></ListedMenu>
      </Box>
    </Box>
  );
};

export default SidePanel;
