/** AboutUs.tsx */

// ========== Imports ========== //
import React from "react";
import { ScrollView, Box, Text } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import MainHeader from "components/MainHeader";
import { useTranslation } from "react-i18next";

// ========== propsTypes ========== //
export type propsTypes = {
  navigation: StackNavigationProp<RootStackParamList, "AboutUs">;
};

/** MainFunction */
let AboutUs: React.FC<propsTypes> = (props) => {
  let { t } = useTranslation();
  /** @kind: Props */

  /** @kind: Hooks */

  /** @kind: Methods */

  /** @kind: Views */

  // ==== RETURN METHOD ==== //
  return (
    <Box flex={1}>
      <MainHeader
        title={t`sidePanel.aboutUs`}
        back="none"
        onPressBack={() => {
          props.navigation.goBack();
        }}
      />
      <Box flex={1} p={1}>
        <ScrollView>
          <Text py={1} fontSize="3xl" textAlign={"center"} mt={4} bold>
            PlusSoft
          </Text>
          <Text px={1} fontSize="sm" py={1} mt={1}>
            A team of Creative Minds designing best Apps and Website for the
            World.
          </Text>
          <Text px={1} fontSize="sm" py={1} mt={2}>
            We have a lots of apps in the stores and our apps works in a lot of
            countries.
          </Text>
          <Text px={1} fontSize="sm" py={1} mt={2}>
            We hope your enjoy in our apps :)
          </Text>
          <Text px={1} fontSize="sm" py={1} mt={2} bold>
            Do you want talk with us for new project ?
          </Text>
          <Text bold>Send Whats app message for us: +962789665181</Text>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default AboutUs;
