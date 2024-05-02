import React, { FC } from "react";

import { Bandaids, Brain, Heartbeat, TestTube } from "phosphor-react-native";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "styles/colors";
import fonts from "styles/fonts";

export const CategoriesList: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTexts}>
        <Text style={styles.mediumText}>Categorias</Text>
        <TouchableOpacity>
          <Text style={styles.boldText}>Ver todas</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={categoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryButtonStyles}>
            {item.icon}
            <Text style={styles.regularText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingBottom: '40%'
  },
  containerTexts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  categoryButtonStyles: {
    width: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 100,
    marginRight: 15
  },
  boldText: {
    ...fonts.boldFont,
    color: colors.primary,
    fontSize: 16,
  },
  mediumText: {
    ...fonts.MediumFont,
    color: colors.gray200,
    fontSize: 16,
  },
  regularText: {
    ...fonts.regularFont,
    color: colors.gray300,
    fontSize: 12,
    marginTop: 10
  }
});

const categoryList = [
    {
        id: '1',
        name: 'Cardiologia',
        icon: <Heartbeat color={colors.primary} size={28} />
    },
    {
        id: '2',
        name: 'Clínico',
        icon: <Bandaids color={colors.primary} size={28} />
    },
    {
        id: '3',
        name: 'Neurologia',
        icon: <Brain color={colors.primary} size={28} />
    },
    {
        id: '4',
        name: 'Exames',
        icon: <TestTube color={colors.primary} size={28} />
    },
]
