/** TransparentCard.tsx */

// ========== Imports ========== //
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import {
  Box,
  Text,
  IBoxProps,
  Icon,
  IIconProps,
  ITextProps,
  IPressableProps,
  Pressable,
} from "native-base";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  createAnimatedPropAdapter,
  withTiming,
} from "react-native-reanimated";

let AnimatedBox = Animated.createAnimatedComponent<IBoxProps>(Box);

// ========== propsTypes ========== //
export type propsTypes = {
  boxStyle?: IPressableProps;
  cardBackgroundColor?: string;
  iconStyle?: IIconProps;
  title?: string;
  titleStyles?: ITextProps;
  subtitleStyles?: ITextProps;
  subtitle?: string;
  icon?: any;
  onPress?: any;
};

/** MainFunction */
let TransparentCard: React.FC<propsTypes> = (props) => {
  /** @kind: Props */

  let animatedValue = useSharedValue(0);

  let animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: animatedValue.value }],
    };
  });

  useEffect(() => {
    animatedValue.value = withTiming(1.1);
    setTimeout(() => {
      animatedValue.value = withTiming(1);
    }, 300);
  });

  /** @kind: Methods */

  /** @kind: Views */

  // ==== RETURN METHOD ==== //
  return (
    <AnimatedBox style={animatedStyles}>
      <Pressable
        p={1}
        borderRadius={2}
        bgColor="purple.400:alpha.60"
        onPress={props.onPress}
        {...props.boxStyle}
      >
        <Box p={0.5} flexDir={"row-reverse"}>
          <Icon as={props.icon} size={5} color="black" {...props.iconStyle} />
        </Box>
        <Box p={0.5} alignItems={"center"} justifyContent={"center"}>
          <Text
            fontSize="xl"
            bold
            color="black"
            textAlign={"center"}
            {...props.titleStyles}
          >
            {props.title}
          </Text>
        </Box>
        <Box py={1} px={1}>
          <Text
            bold
            fontSize="xs"
            textAlign={"left"}
            color="black"
            {...props.subtitleStyles}
          >
            {props.subtitle}
          </Text>
        </Box>
      </Pressable>
    </AnimatedBox>
  );
};

export default TransparentCard;
