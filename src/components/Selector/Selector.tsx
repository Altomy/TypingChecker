/** Selector.tsx */

// ========== Imports ========== //
import React, { useState, useEffect } from "react";
import { View, useWindowDimensions } from "react-native";
import {
  Box,
  Text,
  IBoxProps,
  ScrollView,
  Pressable,
  HStack,
} from "native-base";

// ========== propsTypes ========== //
export type propsTypes = {
  containerStyles?: IBoxProps;
  title: string;
  list: string[];
  onChange: (title: any) => void;
};

/** MainFunction */
let Selector: React.FC<propsTypes> = (props) => {
  /** @kind: Props */

  /** @kind: Hooks */
  let [activeItem, setActiveItem] = useState<string>(
    props.list.length !== 0 ? props.list[0] : ""
  );

  /** @kind: Methods */

  /** @kind: Views */

  // ==== RETURN METHOD ==== //
  return (
    <Box {...props.containerStyles}>
      <Box borderColor={"white"} borderRadius={3} borderWidth={1} p={2} pt={0}>
        <Box
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          top={-20}
        >
          <Box bgColor={"white"} px={3} borderRadius={1} py={2}>
            <Text bold>{props.title}</Text>
          </Box>
        </Box>
        <HStack alignItems={"center"} justifyContent={"center"} p={1}>
          {props.list.length !== 0 &&
            props.list.map((item, index) => (
              <SelectorItem
                title={item}
                key={index}
                active={activeItem == item ? true : false}
                onPress={(title) => {
                  setActiveItem(title);
                  props.onChange(title);
                }}
              />
            ))}
        </HStack>
      </Box>
    </Box>
  );
};

type SelectorItemType = {
  title: string;
  active: boolean;
  onPress: (title: string) => void;
};
let SelectorItem: React.FC<SelectorItemType> = (props) => {
  return (
    <Pressable
      onPress={() => {
        props.onPress(props.title);
      }}
      bgColor={"white"}
      mx={0.5}
      borderColor={props.active ? "success.400" : "white"}
      borderWidth={1}
      borderRadius={2}
      color="black"
      alignItems={"center"}
      justifyContent={"center"}
      py={2}
      flex={1}
    >
      <Text color="black" textAlign={"center"} bold>
        {props.title}
      </Text>
    </Pressable>
  );
};

export default Selector;
