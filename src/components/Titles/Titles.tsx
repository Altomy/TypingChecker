/** Titles.tsx */

// ========== Imports ========== //
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Box, Text, IBoxProps, ITextProps } from "native-base";

// ========== propsTypes ========== //
export type propsTypes = {
  boxStyle?: IBoxProps;
  titleStyle?: ITextProps;
  subTitleStyle?: ITextProps;
  title?: string;
  subtitle?: string;
};

/** MainFunction */
let Titles: React.FC<propsTypes> = (props) => {
  /** @kind: Props */

  /** @kind: Hooks */

  /** @kind: Methods */

  /** @kind: Views */

  // ==== RETURN METHOD ==== //
  return (
    <Box p={1} {...props.boxStyle}>
      <Text fontSize="3xl" textAlign={"left"} {...props.titleStyle}>
        {props.title}
      </Text>
      <Text fontSize="md" mx={3} textAlign={"left"} {...props.subTitleStyle}>
        {props.subtitle}
      </Text>
    </Box>
  );
};

export default Titles;
