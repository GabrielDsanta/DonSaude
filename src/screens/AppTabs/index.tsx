import React, { FC, useEffect, useState } from "react";

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Home } from "./Home";
import { Host } from "react-native-portalize";
import { BottomTab } from "components/BottomTab";
import { Keyboard, Platform } from "react-native";

type AppRoutesType = {
  Home: undefined;
  Profile: undefined;
};

export type AppTabsRoutesNavigationRoutesProps =
  BottomTabNavigationProp<AppRoutesType>;

const Tab = createBottomTabNavigator();

export const AppTabs: FC<{}> = () => {
  const [keyboardShown, setKeyboardShown] = useState(false);

  const handleKeyboardShow = () => {
    setKeyboardShown(true);
  };

  const handleKeyboardHide = () => {
    setKeyboardShown(false);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      handleKeyboardShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      handleKeyboardHide
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);;

  return (
    <Host>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => keyboardShown ? <></> : <BottomTab {...props} />}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Home1" component={Home} />
        <Tab.Screen name="Home2" component={Home} />
        <Tab.Screen name="Home3" component={Home} />
        <Tab.Screen name="Home4" component={Home} />
      </Tab.Navigator>
    </Host>
  );
};
