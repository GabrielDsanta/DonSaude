import React, { FC, useState } from "react";
import TextInputMask, { Mask, MaskInputProps } from "react-native-mask-input";

import { CaretDown, Eye, EyeClosed } from "phosphor-react-native";
import {
  StyleSheet,
  Text,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

import colors from "styles/colors";
import fonts from "styles/fonts";

interface InputProps extends TextInputProps {
  placeholder: string;
  isPassword?: boolean;
  errorMessage?: string;
  label: string;
  mask?: Mask;
  dropdown?: boolean;
}

export const Input: FC<InputProps & MaskInputProps> = ({
  label,
  placeholder,
  isPassword,
  errorMessage,
  mask,
  dropdown,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  return (
    <>
      <Text style={styles.labelStyles}>{label}</Text>
      <View
        style={[
          styles.containerTextInputStyles,
          errorMessage ? { borderColor: "#F2564B" } : undefined,
        ]}
      >
        {dropdown && (
          <View style={[{ marginRight: 5 }]}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>+55 </Text>
              <CaretDown size={16} color={colors.gray300} />
            </TouchableOpacity>
          </View>
        )}
        <TextInputMask
          {...rest}
          mask={mask ? mask : undefined}
          secureTextEntry={isPassword ? isPasswordVisible : false}
          placeholder={placeholder}
          cursorColor="#404040"
          style={styles.textInputStyles}
          placeholderTextColor={colors.gray300}
        />

        {isPassword && (
          <TouchableOpacity
            style={styles.iconStyles}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <EyeClosed color={colors.gray200} size={18} />
            ) : (
              <Eye size={18} color={colors.gray200} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  labelStyles: {
    ...fonts.MediumFont,
    color: colors.gray200,
  },
  containerTextInputStyles: {
    width: "100%",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 45,
    borderWidth: 1,
    borderColor: colors.gray100,
    marginBottom: 15,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  textInputStyles: {
    ...fonts.regularFont,
    color: "#404040",
    width: "100%",
  },
  iconStyles: {
    position: "absolute",
    right: 20,
  },
});
