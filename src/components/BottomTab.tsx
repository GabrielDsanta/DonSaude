import React, { FC } from "react";

import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { AppTabsRoutesNavigationRoutesProps } from "screens/AppTabs";
import {
  CalendarBlank,
  House,
  MagnifyingGlass,
  User,
} from "phosphor-react-native";

import DonSaudeWindVaneSVG from "@assets/DonSaudeWindVaneSVG.svg";
import DonSaudeWhiteWindVaneSVG from "@assets/DonSaudeWhiteWindVaneSVG.svg";
import colors from "../styles/colors";

type RouteNames = "Home" | "Profile";

const isAndroid = Platform.OS === "android";

export const BottomTab: FC<BottomTabBarProps> = ({ state }) => {
  const navigation = useNavigation<AppTabsRoutesNavigationRoutesProps>();

  const bottomTabButtons = [
    {
      id: "1",
      label: "Home",
      component: (
        <House
          color={state.index === 0 ? "white" : colors.gray200}
          weight="fill"
          size={28}
        />
      ),
      route: "Home",
    },
    {
      id: "2",
      label: "Compromissos",
      component: (
        <MagnifyingGlass
          color={state.index === 1 ? "white" : colors.gray200}
          size={28}
        />
      ),
      route: "Home1",
    },
    {
      id: "3",
      label: "Comitês",
      component: (
        <CalendarBlank
          color={state.index === 2 ? "white" : colors.gray200}
          size={28}
        />
      ),
      route: "Home2",
    },
    {
      id: "4",
      label: "Comitês",
      component:
        state.index === 3 ? (
          <DonSaudeWhiteWindVaneSVG />
        ) : (
          <DonSaudeWindVaneSVG />
        ),
      route: "Home3",
    },
    {
      id: "5",
      label: "Perfil",
      component: (
        <User color={state.index === 4 ? "white" : colors.gray200} size={28} />
      ),
      route: "Home4",
    },
  ];

  return (
    <View style={styles.container}>
      {bottomTabButtons.map((button, index) => {
        return (
          <TouchableOpacity
            style={
              state.index === index
                ? styles.activeBottomTab
                : styles.inactiveBottomTab
            }
            key={button.id}
            onPress={() => navigation.navigate(button.route as RouteNames)}
          >
            <View style={styles.containerIconStyles}>{button.component}</View>

            {state.index === index && (
              <View
                style={{
                  width: 25,
                  backgroundColor: colors.primary,
                  height: 5,
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  position: "absolute",
                  bottom: 0,
                }}
              ></View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    height: "11%",
    backgroundColor: colors.black100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 25,
    paddingHorizontal: 15,

    position: "absolute",
    zIndex: 1,
    bottom: -1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: isAndroid ? 1 : 0.4,
    shadowRadius: 5,

    elevation: 10,
  },
  inactiveBottomTab: {
    width: 60,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  activeBottomTab: {
    width: 60,
    height: 55,
    borderRadius: 20,
    backgroundColor: colors.gray200,
    alignItems: "center",
    justifyContent: "center",
  },
  containerIconStyles: {
    alignItems: "center",
    justifyContent: "center",
  },
});
