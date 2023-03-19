import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#1f1e25",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingLeft: 12,
    marginBottom: 12,
  },
  name: {
    flex: 1,
    color: "#FFF",
  },
  button: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#e23c44",
  },
  buttonText: {
    color: "#fff",
    fontSize: 32,
  },
});
