import React from "react";
import { StatusBar, Text, View, Button } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import CinemasInfo from "../../components/CinemasInfo";
import MoviesList from "../../components/MoviesList";
import { getAllMovies } from "../../actions/moviesAction";
import { connect } from "react-redux";
import BackButton from "../../components/BackButton";

class CinemaDetailScreen extends React.Component {
  async componentDidMount() {
    await this.props.getAllMovies();
  }
  render() {
    const cinema = this.props.route;
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#2E3440" />
        <View style={styles.container}>
          <Header title={`${cinema.params.name}`} />
          <CinemasInfo
            description={cinema.params.description}
            address={cinema.params.address}
            phone={cinema.params.phone}
            website={cinema.params.website}
          />
          <MoviesList cinema={cinema} />
          <BackButton />
        </View>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, { getAllMovies })(CinemaDetailScreen);
