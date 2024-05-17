/**
 * Sources: https://www.youtube.com/watch?v=5RUl8exLI-c
 https://github.com/itzpradip/react-navigation-v6-mix/blob/master/src/screens/LoginScreen.js
 https://reactnative.dev/docs/handling-text-input
 https://alitalhacoban.medium.com/basic-login-screen-with-react-native-c9f7fdcc8dae

 OR store login credentials in AsyncStorage: https://docs.expo.dev/versions/latest/sdk/async-storage/ and config navigation object so that journey starts with login when app is opened
 then, upon login, they are navigated to the home page
 */
import {
  View,
  Text,
  StatusBar,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles";

const Login = () => {
  // To collect user input (not necessarily their actual info)
  const [state, setState] = useState({
    username: "",
    password: "",
    phonenumber: "",
  });

  const handleLogin = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login page</Text>

      <TextInput
        placeholder="Enter your username"
        onSubmitEditing={(newText) => setState({ username: newText })}
        defaultValue={state.username}
        textContentType="username"
      />

      <TextInput
        placeholder="Enter your password"
        onSubmitEditing={(newText) => setState({ password: newText })}
        defaultValue={state.password}
        textContentType="password"
      />

      <TextInput
        placeholder="PhoneNumber"
        onSubmitEditing={(newText) => setState({ phonenumber: newText })}
        defaultValue={"000-000-000"}
        textContentType="telephoneNumber"
      />

      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Login;
