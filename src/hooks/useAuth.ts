import { Alert } from "react-native";
import { useCallback } from "react";
import { Local } from "services/Local";
import { AuthService } from "services/AuthService";
import { SignUpVariables } from "types";
import { useDispatch } from "react-redux";
import { setUser } from "@redux/actions";

export const useAuth = () => {
  const dispatch = useDispatch();

  const signIn = useCallback(async (email: string, password: string) => {
    const response = await AuthService.signIn(email, password);

    if (response.success) {
      await Local.set("JWT", response.data.access_token);
      Alert.alert("Sucesso", "Usuário logado com sucesso!");
      return { success: true };
    }
    Alert.alert("Erro", response.error);
    return { success: false };
  }, []);

  const signUp = useCallback(async (variables: SignUpVariables) => {
    const response = await AuthService.signUp(variables);

    if (response.success) {
      dispatch(
        setUser({
          cpf: response.data.cpf,
          email: response.data.email,
          name: response.data.name,
          id: response.data.id,
        })
      );
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      return { success: true };
    }
    Alert.alert("Erro", response.error);
    return { success: false };
  }, []);

  return {
    signIn,
    signUp,
  };
};
