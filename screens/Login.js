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

const Login = ({ navigation }) => {
  // To collect user input (not necessarily their actual info)
  const [state, setState] = useState({
    username: "",
    password: "",
    phonenumber: "",
  });

  //Useless function- will replace with validateCredentials and delete later
  const collectUserInput = () => {
    console.log(state.username);
    console.log(state.phonenumber);
  };

  const validateCredentials = () => {
    //use setUserData
    console.log(
      "Steps to take: 1. if password not set- make them create password. 2. if password set, check that phone number is valid format. 3. if both are good: navigate back to App.js and send new username/password if needed. If not, prompt to do again. for now, if login button is clicked, just navigate back to login."
    );

    // Problem: the t
    // TODO: actually validate the user input
    // default values should be user's actual data passed from App.js- where are we storing user data
    // password should be hidden: map from character to
    //changeUserData
    //YOU LEFT OFF HERE: plan- figure out what I'm supposed to pass and then just try to navigate back home for now
    navigation.navigate("Home");
  };

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

      <TouchableOpacity onPress={collectUserInput}>
        <Text>Login</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Login;
