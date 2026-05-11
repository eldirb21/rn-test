import React, { useState } from "react";
import {
    Alert,
    Text,
    TextInput,
    View,
} from "react-native";

import CustomButton from "../components/CustomButton";
import ScreenContainer from "../components/ScreenContainer";

import { validateEmail } from "../utils/validators";

import {
    saveEmail,
    saveToken,
} from "../storage/auth.storage";

import { loginService } from "../services/auth.service";

export default function LoginScreen({
  navigation,
}: any) {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async () => {
    try {
      // if (!email || !password) {
      //   Alert.alert(
      //     "Error",
      //     "Email dan password wajib"
      //   );

      //   return;
      // }

      // if (!validateEmail(email)) {
      //   Alert.alert(
      //     "Error",
      //     "Format email tidak valid"
      //   );

      //   return;
      // }

      setLoading(true);

      const response =
        await loginService(
          email,
          password
        );

      // await saveToken(response.token);

      // await saveEmail(email);

      navigation.replace("Home");
    } catch (error) {
      Alert.alert(
        "Error",
        "Login gagal"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContainer>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            marginBottom: 30,
          }}
        >
          Login
        </Text>

        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          style={{
            borderWidth: 1,
            padding: 16,
            borderRadius: 10,
            marginBottom: 16,
          }}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={{
            borderWidth: 1,
            padding: 16,
            borderRadius: 10,
            marginBottom: 20,
          }}
        />

        <CustomButton
          title={
            loading
              ? "Loading..."
              : "Login"
          }
          onPress={handleLogin}
        />
      </View>
    </ScreenContainer>
  );
}