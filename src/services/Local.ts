import AsyncStorage from "@react-native-async-storage/async-storage";

const keys = {
  JWT: "@storage:jwt",
  Tour: "@donSaude:tour"
};

type Keys = keyof typeof keys;

export class Local {
  static async setJWT(jwt: string) {
    return await this.set("JWT", JSON.stringify(jwt));
  }

  static async get(key: Keys) {
    try {
      return await AsyncStorage.getItem(keys[key]);
    } catch (error) {
      alert(error);
    }
  }

  static async set(key: Keys, value: string) {
    try {
      return await AsyncStorage.setItem(keys[key], value);
    } catch (error) {
      alert(error);
    }
  }

  static async cleanAll() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      alert(error);
    }
  }

  static async logout() {
    await AsyncStorage.removeItem(keys.JWT);
  }
}
