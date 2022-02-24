import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  input: {
    flex: 1,
    margin: 2,
    borderWidth: 1,
    height: 30,
    padding: 5,
    borderRadius: 5,
    borderColor: "rgba(0,0,0, 0.4)",
  },
  rowContainer: {
    flexDirection: "row",
  },
  selection: {
    alignSelf: "center",
    margin: 2,
    padding: 3,
  },
  typeContainer: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0, 0.4)",
    borderRadius: 5,
    margin: 2,
  },
});
