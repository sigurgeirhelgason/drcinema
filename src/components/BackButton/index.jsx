import React from "react";
import styles from "./styles";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default BackButton = () => {
  const navigation = useNavigation();
  return (
    <FAB
      small
      style={styles.fab}
      icon="keyboard-backspace"
      onPress={() => navigation.goBack()}
    />
  );
};
