import React from "react";
import { StatusBar, Text, View, FlatList } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import UpcomingMoviesList from "../../components/UpcomingMoviesList";
import GlobalStyles from "../../styles/global/styles"

function UpcomingMoviesScreen({ route, navigation }) {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#2E3440" />
            <View style={styles.container}>
                <Header title={"Upcoming Movies"} />
                <UpcomingMoviesList navigation={navigation} />
            </View>
        </>
    );
}

export default UpcomingMoviesScreen;
