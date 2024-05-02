import React, { FC } from "react";

import { BellRinging, ChatCircleDots } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { State } from "@redux/store/configureStore";

import LinesSVG from "@assets/LinesSVG.svg";
import colors from "styles/colors";
import fonts from "styles/fonts";

export const HomeHeader: FC = () => {
  const user = useSelector((state: State) => state.userReducer.user);

  return (
    <View style={styles.container}>
      <View style={styles.containerIcons}>
        <TouchableOpacity>
          <LinesSVG />
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
          <TouchableOpacity>
            <BellRinging color={colors.gray200} size={24} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ChatCircleDots color={colors.gray200} size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.boldText}>Olá, {user.name ? user.name : "Paciente"}</Text>
      <Text style={styles.regularText}>Como podemos te ajudar hoje?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    marginBottom: 5,
  },
  containerIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    marginTop: 10,
  },
  regularText: {
    ...fonts.regularFont,
    color: colors.gray300,
    marginBottom: 20,
  },
  boldText: {
    ...fonts.boldFont,
    fontSize: 26,
    color: colors.black100,
  },
});
