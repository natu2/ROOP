import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  tab: {
    flex: 1,
  },
  navbar: {
    flexDirection: "row",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    fontSize: 16,
  },
});

export default styles;
