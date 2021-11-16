import React from "react";
import { StatusBar, View, SafeAreaView, Button } from "react-native";
import { connect } from "react-redux";
import { getAllCinemas } from "../../actions/cinemasActions";
import CinemasList from "../../components/CinemasList";
import styles from "./styles";
import Header from "../../components/Header";

class CinemasScreen extends React.Component {
  componentDidMount() {
    this.props.getAllCinemas();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#2E3440" />
        <View style={styles.container}>
          <Header title={"Dr.Cinema"} />
          <View style={styles.buttonContainer}>
          <Button
            title={"Væntanlegar kvikmyndir"}
            color={"#57575757"}
            onPress={() => navigate("UpcomingMovies")}
          />
          </View>
          <CinemasList />
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cinemas: state.cinemas,
});

export default connect(mapStateToProps, { getAllCinemas })(CinemasScreen);
