/** ResultBox.tsx */

// ========== Imports ========== //
import React from "react";
import { Box, HStack, Text } from "native-base";
import { useTranslation } from "react-i18next";

// ========== propsTypes ========== //
export type propsTypes = {
  success: number;
  words: number;
  errors: number;
  wordPerSeconds: number;
};

/** MainFunction */
let ResultBox: React.FC<propsTypes> = (props) => {
  /** @kind: Props */

  /** @kind: Hooks */

  let { t } = useTranslation("translation", {
    keyPrefix: "myResult.resultBox",
  });

  /** @kind: Methods */

  /** @kind: Views */

  // ==== RETURN METHOD ==== //
  return (
    <Box p={0.5} bgColor="purple.400:alpha.70" py={2}>
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Box
          p={1}
          flex={1}
          bgColor={"white:alpha.50"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text color="success.500" bold>
            {props.success} {t`success`}
          </Text>
        </Box>
        <Box
          flex={1}
          p={1}
          bgColor={"white:alpha.50"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text color="error.600" bold>
            {props.errors} {t`errors`}
          </Text>
        </Box>
        <Box
          flex={1}
          p={1}
          bgColor={"white:alpha.50"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text color="info.500" bold>
            {props.words} {t`words`}
          </Text>
        </Box>
        <Box
          flex={1}
          p={1}
          bgColor={"white:alpha.50"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text color="blue.500" bold>
            {props.wordPerSeconds} {t`word`}/s
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default React.memo(ResultBox);
