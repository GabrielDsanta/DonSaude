import React, { FC } from "react";

import { CalendarBlank, Star } from "phosphor-react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import fonts from "styles/fonts";
import colors from "styles/colors";

interface DoctorCardProps {
  name: string;
  expertise: string;
  imageUri: string;
  rating: string;
}

export const DoctorCard: FC<DoctorCardProps> = ({
  expertise,
  imageUri,
  name,
  rating,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.imageStyles} source={{ uri: imageUri }} />
      <Text style={styles.mediumText}>{name}</Text>
      <Text style={styles.regularText}>{expertise}</Text>

      <View style={styles.containerRatingAndCalendar}>
        <View style={styles.lineRating}>
          <Star color={colors.gray300} size={18} />
          <Text style={styles.regularText}>{rating}</Text>
        </View>

        <TouchableOpacity style={styles.calendarStyles}>
          <CalendarBlank color="white" size={20} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 175,
    height: 240,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginRight: 20,
    paddingHorizontal: 15,
  },
  imageStyles: {
    width: 80,
    height: 80,
    borderRadius: 10000,
    marginBottom: 10,
  },
  containerRatingAndCalendar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  calendarStyles: {
    width: 35,
    height: 35,
    borderRadius: 1000,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  lineRating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  mediumText: {
    ...fonts.MediumFont,
    color: colors.black100,
    fontSize: 18,
  },
  regularText: {
    ...fonts.regularFont,
    color: colors.gray300,
  },
});
