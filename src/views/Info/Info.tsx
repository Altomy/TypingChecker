/** CallUs.tsx */

// ========== Imports ========== //
import React from "react";

import { Box, ScrollView, Text, TextField } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import MainHeader from "components/MainHeader";
import useStorageState from "hooks/useStorageState";
// ========== propsTypes ========== //
export type propsTypes = {
  navigation: StackNavigationProp<RootStackParamList, "CallUs">;
};

/** MainFunction */
let CallUs: React.FC<propsTypes> = (props) => {
  /** @kind: Props */

  /** @kind: Hooks */
  let { t } = useTranslation("translation", { keyPrefix: "info" });

  let [name, setName] = useStorageState("@TC/name");
  /** @kind: Methods */

  // ==== RETURN METHOD ==== //
  return (
    <Box flex={1} bgColor={"white"}>
      <MainHeader
        title={t`title`}
        back="none"
        onPressBack={() => {
          props.navigation.goBack();
        }}
      />
      <Box flex={1} p={2}>
        <ScrollView>
          <Text py={1} textAlign={"left"}>{t`subtitle`}</Text>
          <TextField
            placeholder={t`name`}
            value={name}
            autoFocus
            onChangeText={(val) => setName(val)}
          />
        </ScrollView>
      </Box>
    </Box>
  );
};

export default CallUs;
