import React, { FC } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";

import DonSaudeLogo from "@assets/DonSaudeLogo.svg";
import colors from "styles/colors";


export const Loading: FC = () => {
  return (
    <View style={styles.container}>
      <DonSaudeLogo width={150} height={150} />
      <ActivityIndicator size={30} color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});
