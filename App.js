//React & Other Libary Imports
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Styles, Icons, Illustrations

//Project File Imports
import NavBar from "./components/NavBar";
import { EmptyScreen } from "./screens/placeholders/EmptyScreen";
import Login from "./screens/Login";
import styles from "./styles";
import UploadPhoto from "./screens/UploadPhoto";
import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <NavBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="page 1" component={Login} />
      <Tab.Screen name="Create Post" component={UploadPhoto} />
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
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );

  /** 
   * Commenting out to be able to view Login page
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <NavBar {...props} />}>
        <Tab.Screen name="Home" component={EmptyScreen} />
        <Tab.Screen name="page 1" component={EmptyScreen} />
        <Tab.Screen name="page 2" component={EmptyScreen} />
        <Tab.Screen name="page 3" component={EmptyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  */
}
