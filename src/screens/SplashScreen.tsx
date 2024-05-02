import React, { FC, useEffect } from "react";

import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Local } from "services/Local";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "Routes";

import DonSaudeLogo from "@assets/DonSaudeLogo.svg";

import colors from "styles/colors";

export const SplashScreen: FC = () => {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  const verifyJWT = async () => {
    const isTourCompleted = await Local.get("Tour");
    if(!isTourCompleted){
      return navigation.navigate('Tour')
    }

    const JWT = await Local.get("JWT");
    if(JWT){
      return navigation.navigate('AppTabs')
    } else {
      return navigation.navigate('SignIn')
    }
  }

  useEffect(() => {
    verifyJWT()
  }, [])

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
