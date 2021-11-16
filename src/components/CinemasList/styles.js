import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5,
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 0.25,
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: "400",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "400",
  },
});
