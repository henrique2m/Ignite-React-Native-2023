import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#666B6B",
    fontSize: 16,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    height: 56,
    flex: 1,
    marginRight: 12,
    color: "#fff",
    borderRadius: 5,
    padding: 12,
    backgroundColor: "#ddd",
  },
  button: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#31cf67",
  },
  buttonText: {
    color: "#fff",
    fontSize: 32,
  },
  listEmptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
