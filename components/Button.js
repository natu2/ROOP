//Source: https://docs.expo.dev/tutorial/build-a-screen/
import { StyleSheet, View, Pressable, Text } from "react-native";

//project files
import styles from "../styles";

const Button = ({ label }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={pnPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
