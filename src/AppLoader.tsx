/** AppLoader.tsx */

// ========== Imports ========== //
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import useStorageOrms from "hooks/useStorageOrms";
import useAnalytics from "hooks/useAnalytics";
// ========== propsTypes ========== //
export type propsTypes = {};

const Stack = createNativeStackNavigator<RootStackParamList>();

/** MainFunction */
let AppLoader: React.FC<propsTypes> = (props) => {
  /** @kind: Props */

  /** @kind: Hooks */
  let { createModel } = useStorageOrms();

  let { enableAnalytics } = useAnalytics();

  /** @kind: Methods */
  let FinishLoading = React.useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  let Builder = async () => {
    FinishLoading();
  };

  let GenerateModels = React.useCallback(async () => {
    await createModel("@TC/Results");
  }, []);

  let _enableAnalytics = async () => {
    await enableAnalytics();
  };

  React.useEffect(() => {
    Builder();
    GenerateModels();
    _enableAnalytics();
  }, []);

  // ==== RETURN METHOD ==== //
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={require("views/Home/Home").default}
        />
        <Stack.Screen
          name="Exam"
          component={require("views/Exam/Exam").default}
        />
        <Stack.Screen
          name="ExamResult"
          component={require("views/ExamResult/ExamResult").default}
        />
        <Stack.Screen
          name="Global"
          component={require("views/Global/Global").default}
        />
        <Stack.Screen
          name="MyResults"
          component={require("views/MyResults/MyResults").default}
        />
        <Stack.Screen
          name="Languages"
          options={{ presentation: "modal" }}
          component={require("views/Languages/Languages").default}
        />
        <Stack.Screen
          name="AboutUs"
          options={{ presentation: "modal" }}
          component={require("views/AboutUs/AboutUs").default}
        />
        <Stack.Screen
          name="CallUs"
          options={{ presentation: "modal" }}
          component={require("views/CallUs/CallUs").default}
        />
        <Stack.Screen
          name="Info"
          options={{ presentation: "modal" }}
          component={require("views/Info/Info").default}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppLoader;
