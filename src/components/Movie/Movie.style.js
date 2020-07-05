import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  singleItem: {
    width: "85%",
    height: "75%",
    backgroundColor: "blue",
    justifyContent: "space-between",
    borderRadius: 25,
  },
  outerCircle: {
    alignSelf: "flex-start",
    marginLeft: 30,
    marginBottom: -30,
    bottom: 0,
    borderRadius: 40,
    width: 70,
    height: 70,
    backgroundColor: "black",
  },
  innerCircle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    width: 60,
    height: 60,
    margin: 5,
    backgroundColor: "white",
  },
});
