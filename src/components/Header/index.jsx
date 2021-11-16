import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

function Header(props) {
  const { title, year } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {year ? <Text style={styles.year}>({year})</Text> : null}
    </View>
  );
}

export default Header;
