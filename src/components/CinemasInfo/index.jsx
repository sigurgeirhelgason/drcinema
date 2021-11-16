import React from "react";
import styles from "./styles";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

function CinemasInfo(props) {
  const { description, address, phone, website } = props;
  return (
    <View style={styles.container}>
      {!description ? null : (
        <View style={styles.descriptionBox}>
          <Text style={styles.itemTitle}>
            {description.replace(/<\/?[^>]+(>|$)/g, "")}
          </Text>
        </View>
      )}
      <View style={styles.infoBox}>
        <Text style={styles.subTitle}>{phone}</Text>
        <Text style={styles.subTitle}>{website}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.subTitle}>{address}</Text>
      </View>
    </View>
  );
}

export default CinemasInfo;
