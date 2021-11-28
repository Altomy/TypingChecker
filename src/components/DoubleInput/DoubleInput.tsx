/** DoubleInput.tsx */

// ========== Imports ========== //
import React, { useState, useEffect } from "react";
import { View, useWindowDimensions, TextInput, Platform } from "react-native";
import useTimer from "hooks/useTimer";
import {
  Box,
  Input,
  Text,
  TextField,
  TextArea,
  KeyboardAvoidingView,
  ScrollView,
  Button,
} from "native-base";

// ========== propsTypes ========== //
export type propsTypes = {};

/** MainFunction */
let DoubleInput: React.FC<propsTypes> = (props) => {
  /** @kind: Props */

  /** @kind: Hooks */
  let { height, width } = useWindowDimensions();

  let text = `is simply dummy text of the printing and types setting industry`;
  let [value, setValue] = useState("");

  let [isDisable, setIsDisable] = useState(false);

  let filterText = React.useCallback(() => {
    let _text = text.split(" ");
    _text = _text.map((_t) => _t + " ");

    // Get how much typing
    let _howMuchTyping = value.split(" ");

    return _text.splice(_howMuchTyping.length - 1, 6);
  }, [value]);

  let checker = () => {
    let _text = text.split(" ");
    let _values = value.split(" ");

    _text = _text.map((_t) => _t.toLowerCase());
    _values = _values.map((_v) => _v.toLowerCase());

    let _success = 0;
    let _error = 0;
    let _words = 0;
    _values.forEach((_val, index) => {
      if (_text[index] == _val) {
        _success = _success + 1;
      } else {
        if (_val !== "") {
          _error = _error + 1;
        }
      }

      if (_val !== "") {
        _words = _words + 1;
      }
    });

    console.log(`Success: ${_success}, Error: ${_error}, _words: ${_words}`);
  };

  /** @kind: Methods */

  /** @kind: Views */

  // ==== RETURN METHOD ==== //
  return (
    <KeyboardAvoidingView
      position={"relative"}
      behavior={Platform.OS === "ios" ? "height" : "padding"}
    >
      <Box mx={1} px={0.5} bgColor={"muted.300"} mb={2} py={3} borderRadius={2}>
        <Text fontSize="lg" bold>
          <Text fontSize="lg" bold color="blue.500">
            {filterText()[0]}
          </Text>
          {filterText().splice(1, 5)}
        </Text>
      </Box>
      <Box mx={1} height={height / 3} borderRadius={2} bgColor={"muted.300"}>
        <Box flex={1}>
          <TextArea
            p={0}
            value={value}
            isDisabled={isDisable}
            onChangeText={(e) => {
              setValue(e);
            }}
            fontWeight={"bold"}
            m={0}
            flex={1}
            fontSize="md"
            borderWidth={0}
          />
        </Box>
      </Box>
      <Button onPress={checker}>Check</Button>
    </KeyboardAvoidingView>
  );
};

export default DoubleInput;
