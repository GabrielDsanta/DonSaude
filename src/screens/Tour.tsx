import React, { FC, useRef, useState } from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderLogo } from "components";
import { CaretRight } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "Routes";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Swiper from "react-native-swiper";
import DoctorsSVG from "@assets/DoctorsSVG.svg";
import OnlineDoctorSVG from "@assets/OnlineDoctorSVG.svg";
import OrthopedicSVG from "@assets/OrthopedicSVG.svg";

import colors from "styles/colors";
import fonts from "styles/fonts";

export const Tour: FC = () => {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  const [isLastSlide, setIsLastSlide] = useState(false);

  const swiperRef = useRef<Swiper>(null);

  const onNextButtonPress = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1, true);
    }
  };

  const handleFinishTour = async () => {
    await AsyncStorage.setItem("@donSaude:tour", "checked");
    navigation.navigate("SignUp");
  };

  const renderNextButton = () => {
    if (isLastSlide) {
      return (
        <TouchableOpacity
          onPress={handleFinishTour}
          style={styles.nextButtonStyles}
        >
          <CaretRight color={colors.primary} size={20} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={onNextButtonPress}
          style={styles.nextButtonStyles}
        >
          <CaretRight color={colors.primary} size={20} />
        </TouchableOpacity>
      );
    }
  };

  const onIndexChanged = (index: number) => {
    setIsLastSlide(index === slides.length - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderLogo screenToNavigate="SignIn" whiteTheme />
      <Swiper
        onIndexChanged={onIndexChanged}
        ref={swiperRef}
        loop={false}
        showsButtons
        prevButton={<></>}
        nextButton={<></>}
        showsPagination={true}
        paginationStyle={styles.pagination}
        dot={<View style={styles.inactiveDot} />}
        activeDot={<View style={styles.activeDot} />}
      >
        {slides.map((slide, index) => (
          <View key={index}>
            {slide.illustration}
            <Text style={[styles.boldFont, index === 1 && { width: 280 }]}>
              {slide.title}
            </Text>
            <Text style={styles.regularFont}>{slide.description}</Text>
          </View>
        ))}
      </Swiper>
      {renderNextButton()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink100,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  nextButtonStyles: {
    backgroundColor: "#FFF0F7",
    height: 50,
    width: 50,
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    right: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  illustrationStyles: {
    marginVertical: 5,
    alignSelf: "center",
  },
  pagination: {
    justifyContent: "flex-start",
    top: "auto",
    bottom: 50,
  },
  activeDot: {
    backgroundColor: "white",
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  inactiveDot: {
    backgroundColor: colors.secondary,
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  boldFont: {
    ...fonts.boldFont,
    fontSize: 22,
    width: 180,
  },
  regularFont: {
    ...fonts.regularFont,
    marginTop: 15,
    fontSize: 16,
  },
});

const slides = [
  {
    key: "one",
    illustration: <DoctorsSVG width={330} style={styles.illustrationStyles} />,
    title: "Bem-vindo ao App Don Saúde",
    description:
      "O app da Don para fazer seus atendimentos sózinho, veja como é simples!",
  },
  {
    key: "two",
    illustration: (
      <OnlineDoctorSVG width={330} style={styles.illustrationStyles} />
    ),
    title: "Acesse ou cadastre-se no App!",
    description:
      "Você tem acesso a solicitar atendimentos, acompanhar e ao exclusivo CLUB DON!",
  },
  {
    key: "three",
    illustration: (
      <OrthopedicSVG style={{ marginVertical: "25%", alignSelf: "center" }} />
    ),
    title: "Vamos começar?",
    description:
      "Entre ou cadastre-se para começar a aproveitar o app Don Saúde",
  },
];
