import React, { FC } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DoctorCard } from "./DoctorCard";

import fonts from "styles/fonts";
import colors from "styles/colors";

export const MostWantedList: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTexts}>
        <Text style={styles.mediumText}>Mais procurados</Text>
        <TouchableOpacity>
          <Text style={styles.boldText}>Ver todas</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={mockData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DoctorCard
            rating={item.rating}
            name={item.name}
            imageUri={item.imageUri}
            expertise={item.expertise}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  containerTexts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
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
});

const mockData = [
  {
    id: "1",
    name: "Nome Dr.",
    expertise: "área de atendimento",
    rating: "9,8",
    imageUri:
      "https://i0.wp.com/sanarmed.com/wp-content/uploads/2024/03/media-759.jpg?fit=1254%2C837&ssl=1",
  },
  {
    id: "2",
    name: "Nome Dr.",
    expertise: "área de atendimento",
    rating: "9,8",
    imageUri:
      "https://i0.wp.com/sanarmed.com/wp-content/uploads/2024/03/media-759.jpg?fit=1254%2C837&ssl=1",
  },
];
