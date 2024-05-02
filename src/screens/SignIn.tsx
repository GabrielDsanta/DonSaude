import React, { FC, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "hooks/useAuth";
import { Formik } from "formik";
import { Input, HeaderLogo } from "components";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "Routes";
import { SafeAreaView } from "react-native-safe-area-context";

import DoctorLoginSVG from "@assets/DoctorLoginSVG.svg";

import colors from "styles/colors";
import fonts from "styles/fonts";

import * as yup from "yup";

const signInValidation = yup.object().shape({
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve possuir no mínimo 6 dígitos"),
});

export const SignIn: FC = () => {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  const { signIn } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { success } = await signIn(email, password);
      if (success) {
        navigation.navigate("AppTabs");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerContent}
      >
        <View>
          <HeaderLogo screenToNavigate="Tour" />
          <DoctorLoginSVG width={290} style={styles.doctorLoginSVGStyles} />

          <Text style={styles.boldText}>Acesse</Text>
          <Text style={styles.regularText}>
            Entre com seus dados de acesso Don Saúde.
          </Text>

          <Formik
            validationSchema={signInValidation}
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values: { email: string; password: string }) =>
              handleLogin(values.email, values.password)
            }
          >
            {({ handleChange, values, errors, handleSubmit }) => {
              return (
                <View>
                  <Input
                    label="E-mail ou Código"
                    onChangeText={handleChange("email")}
                    value={values["email" as keyof typeof values]}
                    errorMessage={errors["email" as keyof typeof values]}
                    placeholder="Digite seu e-mail ou código de parceiro"
                  />

                  <Input
                    isPassword={true}
                    label="Senha"
                    onChangeText={handleChange("password")}
                    value={values["password" as keyof typeof values]}
                    errorMessage={errors["password" as keyof typeof values]}
                    placeholder="Digite sua senha"
                  />

                  <TouchableOpacity
                    disabled={isLoading}
                    onPress={() => handleSubmit()}
                    style={styles.submitButton}
                  >
                    {isLoading ? (
                      <ActivityIndicator color='white' />
                    ): (
                      <Text style={styles.loginButtonTextStyles}>Entrar</Text>
                    )}
                    
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Text style={styles.forgorPasswordTextStyles}>
                      Esqueceu a senha?
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  containerContent: {
    backgroundColor: colors.background,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 25,
    paddingHorizontal: 20,
    flex: 1,
    paddingTop: 20,
  },
  doctorLoginSVGStyles: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  submitButton: {
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    height: 45,
  },
  loginButtonTextStyles: {
    ...fonts.boldFont,
    fontSize: 16,
  },
  forgorPasswordTextStyles: {
    ...fonts.boldFont,
    color: colors.primary,
    textAlign: "center",
    marginBottom: "20%",
    marginTop: 20,
    fontSize: 16,
  },
  regularText: {
    ...fonts.regularFont,
    color: colors.gray300,
    marginBottom: 20,
  },
  boldText: {
    ...fonts.boldFont,
    color: colors.black100,
    fontSize: 26,
    marginBottom: 5,
  },
});
