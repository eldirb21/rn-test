import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEY } from "../constants/storage";

export const saveToken = async (
  token: string
) => {
  await AsyncStorage.setItem(
    STORAGE_KEY.TOKEN,
    token
  );
};

export const getToken = async () => {
  return AsyncStorage.getItem(
    STORAGE_KEY.TOKEN
  );
};

export const removeToken = async () => {
  return AsyncStorage.removeItem(
    STORAGE_KEY.TOKEN
  );
};

export const saveEmail = async (
  email: string
) => {
  await AsyncStorage.setItem(
    STORAGE_KEY.EMAIL,
    email
  );
};

export const getEmail = async () => {
  return AsyncStorage.getItem(
    STORAGE_KEY.EMAIL
  );
};