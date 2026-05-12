import { CustomButton, ScreenContainer, Texts } from "@atoms";
import { loginService } from "@services";
import { saveEmail, saveToken } from "@storage";
import { validateEmail } from "@utils";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

 
 
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
      if (!email || !password) {
        Alert.alert(
          "Error",
          "Email dan password wajib"
        );

        return;
      }

      if (!validateEmail(email)) {
        Alert.alert(
          "Error",
          "Format email tidak valid"
        );

        return;
      }

      setLoading(true);

      const response =
        await loginService(
          email,
        );

      await saveToken(response.token);

      await saveEmail(email);

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
      <View style={bgTop} />
      <View style={container}>
        <View style={containerTitle}>
          <Texts type="title">Hallo</Texts>
          <Texts type="subtitle">Welcome app test!</Texts>
        </View>
        <ScrollView contentContainerStyle={scroller}>
          <View style={form}>
            <Texts center type="subtitle" style={title}>Login</Texts>

            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              style={input}
            />

            <TextInput
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={input}
            />

            <View style={devider} />

            <CustomButton
              onPress={handleLogin}
              title={loading ? "Loading..." : "Login"}
            />
          </View>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
}

const bgTop: ViewStyle = {
  backgroundColor: '#72e625',
  height: '34%',
  position: 'absolute', top: 0, left: 0, right: 0, bottom: '50%',
  borderBottomStartRadius: "40%",
  borderBottomEndRadius: '40%'
}

const containerTitle: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: "15%",
  left: 0,
  right: 0
}

const scroller: ViewStyle = { flexGrow: 1, justifyContent: 'center' }

const form: ViewStyle = {
  backgroundColor: '#FFF',
  borderRadius: 10,
  padding: 20,
  gap: 20,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
}
const container: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  padding: 20,
}
const title: TextStyle = {
  marginBottom: 20,
}

const input: TextStyle = {
  borderWidth: 1,
  padding: 16,
  borderRadius: 10,
}
const devider: ViewStyle = {
  height: 10
}