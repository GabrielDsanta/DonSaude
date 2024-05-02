import React, { FC, useState } from "react";

import { HeaderLogo, Input } from "components";
import {
  ActivityIndicator,
  KeyboardTypeOptions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "Routes";
import { useAuth } from "hooks/useAuth";
import { SignUpVariables } from "types";
import { Masks } from "react-native-mask-input";

import colors from "styles/colors";
import fonts from "styles/fonts";

import * as yup from "yup";

const registerValidation = yup.object().shape({
  name: yup.string().required("Informe o Nome"),
  phone: yup.string().required("Informe o seu número de telefone"),
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve possuir no mínimo 6 dígitos"),
  confirmPassword: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password")], "A confirmação da senha não confere"),
});

export const SignUp: FC = () => {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  const { signUp } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (values: SignUpVariables) => {
    setIsLoading(true);
    try {
      const { success } = await signUp(values);
      if (success) {
        navigation.navigate("SignIn");
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
        <HeaderLogo screenToNavigate="Tour" />

        <Text style={styles.boldText}>Cadastre-se</Text>
        <Text style={styles.regularText}>Preencha os dados abaixo</Text>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values: SignUpVariables) => handleSignUp(values)}
          validationSchema={registerValidation}
        >
          {({ handleChange, handleSubmit, values, errors, setFieldValue }) => {
            return (
              <View>
                {fields.map((field) => (
                  <View key={field.id}>
                    <Input
                      dropdown={field.dropdown}
                      mask={field.mask}
                      label={field.label}
                      errorMessage={errors[field.id as keyof typeof values]}
                      onChangeText={handleChange(field.id)}
                      value={values[field.id as keyof typeof values]}
                      isPassword={field.isPassword}
                      keyboardType={field.keyboardType as KeyboardTypeOptions}
                      placeholder={field.placeholder}
                    />
                  </View>
                ))}

                <TouchableOpacity
                  disabled={isLoading}
                  onPress={() => handleSubmit()}
                  style={styles.submitButton}
                >
                  {isLoading ? (
                    <ActivityIndicator color="white" />
                  ) : (
                    <Text style={styles.registerButtonTextStyles}>
                      Criar conta
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
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
  submitButton: {
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "15%",
    height: 45,
  },
  registerButtonTextStyles: {
    ...fonts.boldFont,
    fontSize: 16,
  },
  regularText: {
    ...fonts.regularFont,
    color: colors.gray300,
    marginBottom: 25,
  },
  boldText: {
    ...fonts.boldFont,
    color: colors.black100,
    fontSize: 24,
    marginTop: 10,
  },
});

const fields = [
  {
    id: "name",
    label: "Nome completo",
    placeholder: "Digite seu nome completo",
  },
  {
    id: "email",
    label: "E-mail",
    placeholder: "Digite seu e-mail ou código de parceiro",
  },
  {
    id: "phone",
    label: "Telefone",
    placeholder: "DDD + celular",
    keyboardType: "number-pad",
    mask: Masks.BRL_PHONE,
    dropdown: true,
  },
  {
    id: "password",
    label: "Crie uma senha",
    placeholder: "Digite sua senha",
    isPassword: true,
  },
  {
    id: "confirmPassword",
    label: "Repita sua senha",
    placeholder: "Digite sua senha",
    isPassword: true,
  },
];
