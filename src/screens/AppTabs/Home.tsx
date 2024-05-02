import React, { FC, useEffect } from "react";

import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader, MostWantedList, SeachBar, CategoriesList } from "./components";

import colors from "styles/colors";


export const Home: FC = () => {
  useEffect(() => {
    StatusBar.setBarStyle("dark-content");

    return () => {
      StatusBar.setBarStyle("dark-content");
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <SeachBar />
        <MostWantedList />
        <CategoriesList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray400,
    paddingHorizontal: 20,
  },
});
