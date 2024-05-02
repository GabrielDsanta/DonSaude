import React, { FC } from "react";

import { StyleSheet, TouchableOpacity, View } from "react-native";
import { CaretLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "Routes";

import DonSaudeLogo from "@assets/DonSaudeLogo.svg";
import DonSaudeWhiteLogo from "@assets/DonSaudeWhiteLogoSVG.svg";
import colors from "styles/colors";

interface HeaderLogoProps {
  whiteTheme?: boolean;
  screenToNavigate: "AppTabs" | "SignIn" | "SignUp" | "Tour";
}

export const HeaderLogo: FC<HeaderLogoProps> = ({
  whiteTheme = false,
  screenToNavigate,
}) => {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  return (
    <View style={styles.containerHeaderLogin}>
      <TouchableOpacity onPress={() => navigation.navigate(screenToNavigate)}>
        <CaretLeft color={whiteTheme ? "white" : colors.gray200} size={20} />
      </TouchableOpacity>

      {whiteTheme ? (
        <DonSaudeWhiteLogo width={115} height={50} />
      ) : (
        <DonSaudeLogo width={115} height={50} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeaderLogin: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
