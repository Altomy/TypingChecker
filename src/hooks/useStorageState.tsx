import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

async function checkStorageVariable(key: string) {
  let text = "";
  let storageValue = await AsyncStorage.getItem(key);
  if (storageValue) {
    text = storageValue;
  }

  return text;
}

type useStorageStateType = (
  storageKey: string
) => [value: string, storeStorageVariables: (val: string) => Promise<void>];

/**
 * Used for change state and save it to storage async
 *
 *
 * @param storageKey
 * @returns return the `[state:string,saveState:(value:string) => void]`
 */
let useStorageState: useStorageStateType = (storageKey: string) => {
  let [value, setValue] = React.useState<string>("");

  let build = async () => {
    let text = await checkStorageVariable(storageKey);

    setValue(text);
  };

  async function storeStorageVariables(val: string) {
    setValue(val);
    await AsyncStorage.setItem(storageKey, val);
  }

  React.useEffect(() => {
    build();
  }, []);

  return [value, storeStorageVariables];
};

export default useStorageState;
