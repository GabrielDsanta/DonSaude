import React, { FC, useState } from "react";

import { Funnel, MagnifyingGlass } from "phosphor-react-native";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import colors from "styles/colors";
import fonts from "styles/fonts";

export const SeachBar: FC = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.containerInputStyles}>
        <MagnifyingGlass color={colors.gray300} />
        <TextInput
            style={styles.regularText}
          cursorColor={colors.black100}
          placeholderTextColor={colors.gray300}
          placeholder="Buscar"
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>

      <TouchableOpacity style={styles.funnelButtonStyles}>
        <Funnel size={24} color={colors.black100} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerInputStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.gray100,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: '80%',
    height: 50,
    gap: 5,
  },
  funnelButtonStyles: {
    borderWidth: 1,
    borderColor: colors.gray100,
    height: 50,
    width: 50,
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginRight: 5,
    overflow: 'hidden'
  },
  regularText: {
    ...fonts.regularFont,
    color: colors.black100,
    width: '90%'
  }
});
