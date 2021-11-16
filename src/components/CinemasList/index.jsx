import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const CinemaList = ({ cinemas }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={cinemas}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CinemaDetail", item)}
            >
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.subTitle}>{item.website}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = ({ cinemas }) => ({ cinemas });

export default connect(mapStateToProps)(CinemaList);
