//Sources: https://reactnavigation.org/docs/auth-flow/
// and the snack embedded in the site ^
//React & Other Libary Imports
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";

//Styles, Icons, Illustrations

//Project File Imports
import NavBar from "./components/NavBar";
import { EmptyScreen } from "./screens/placeholders/EmptyScreen";
import Login from "./screens/Login";
import styles from "./styles";
import UploadPhoto from "./screens/UploadPhoto";
import Home from "./screens/Home";

const Tab = createBottomTabNavigator();
const getIsSignedIn = () => {};

function MainTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <NavBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="page 1" component={EmptyScreen} />
      <Tab.Screen name="Create" component={UploadPhoto} />
      <Tab.Screen name="page 3" component={EmptyScreen} />
    </Tab.Navigator>
  );
}

/**
 * So far, just an empty page with navigation to other empty pages.
 * For my own understanding: Both external libraries are helping with navigation
 * between several different screens so that I am not writing code that ineffectively
 * renders views one top of the other. In this case, we use the bottom-tabs component Tab to pass in a function that returns the element
 * that is actually the bar (we already created this component in NavBar.js). toBar accepts a function,
 * not a react element- hence the syntax.
 * @returns The main view for the app
 */
export default function App() {
  const isSignedIn = getIsSignedIn();

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <>
          <MainTabs />
        </>
      ) : (
        <>
          <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Sign-Up" component={EmptyScreen} />
          </Tab.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}
