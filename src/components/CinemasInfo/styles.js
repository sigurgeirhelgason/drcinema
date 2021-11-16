import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3440",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "400",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
  },
  descriptionBox: {
    padding: 50,
    fontWeight: "400",
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    
  },
  infoBox: {
    flexDirection: "row",
    padding: 10,
    fontWeight: "400",
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "space-between",
  },
});
