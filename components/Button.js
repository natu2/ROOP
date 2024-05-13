//Source: https://docs.expo.dev/tutorial/build-a-screen/
import { StyleSheet, View, Pressable, Text } from "react-native";

//project files
import styles from "../styles";

const Button = ({ label, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
