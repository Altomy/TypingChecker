/** CircleButton.tsx */

// ========== Imports ========== //
import React, { useState, useEffect } from "react";
import { View, useWindowDimensions } from "react-native";
import useAds from "hooks/useAds";
import {
  Box,
  Text,
  IBoxProps,
  ITextProps,
  Pressable,
  IPressableProps,
} from "native-base";

// ========== propsTypes ========== //
export type propsTypes = {
  boxStyle?: IBoxProps;
  internalBoxStyle?: IBoxProps;
  title?: string;
  titleStyle?: ITextProps;
  circleSize?: number;
  onPress?: () => void;
};

/** MainFunction */
let CircleButton: React.FC<propsTypes> = (props) => {
  /** @kind: Props */
  let { width, height } = useWindowDimensions();

  /** @kind: Hooks */
  let circleSize = props.circleSize ? props.circleSize : 2.5;

  /** @kind: Methods */

  /** @kind: Views */

  // ==== RETURN METHOD ==== //
  return (
    <Pressable onPress={props.onPress}>
      <Box
        width={width / circleSize}
        height={width / circleSize}
        borderRadius={width / circleSize}
        alignItems={"center"}
        justifyContent={"center"}
        borderWidth={2}
        borderColor="black"
        bgColor={"dark.100:alpha.80"}
        {...props.boxStyle}
      >
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          {...props.internalBoxStyle}
        >
          <Text color="white" fontSize="md" {...props.titleStyle}>
            {props.title}
          </Text>
          {props.children}
        </Box>
      </Box>
    </Pressable>
  );
};

export default CircleButton;
