/** useKeyboard.tsx */

// ========== Imports ========== //
import React, { useState, useEffect } from "react";
import { Keyboard } from "react-native";

// ========== propsTypes ========== //

let useKeyboard = () => {
  let [keyboardStatus, setKeyboardStatus] = React.useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return [keyboardStatus, setKeyboardStatus];
};

export default useKeyboard;
