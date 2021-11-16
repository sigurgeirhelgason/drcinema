import React from "react";
import { StatusBar, Text, View, Linking, Image, Button } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import BackButton from "../../components/BackButton";

const MovieScreen = (props) => {
  const { selectedCinema, item } = props.route.params;
  const { navigation } = props;

  const movie = item;
  let omdb;
  try {
    if (movie.omdb.length > 0) {
      omdb = movie.omdb[0];
    } else {
      omdb = null;
    }
  } catch (err) {
    omdb = null;
  }

  let filteredShowtimes = null;
  try {
    filteredShowtimes = movie.showtimes.filter(
      (showtime) => showtime.cinema.id == selectedCinema.id
    );
  } catch (err) {
    filteredShowtimes = null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2E3440" />
      <View style={styles.header}>
        <Header title={`${movie.title}`} year={`${movie.year}`} />
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <View style={styles.infoBox}>
              <Image
                style={styles.poster}
                source={{ uri: movie.poster.toString() }}
              />
            </View>

            <View style={styles.infoBox}>
              {movie.genres.length > 0 && movie.genres[0].Name
                ? movie.genres.map((genre, index) => {
                    return (
                      <Text style={styles.descriptionRight} key={index}>
                        {`${genre.Name} `}
                      </Text>
                    );
                  })
                : null}

              {movie.durationMinutes == "" ? null : (
                <Text style={styles.descriptionRight}>
                  {`\n`}Lengd {movie.durationMinutes} mín{" "}
                </Text>
              )}
              {omdb === null ? null : (
                <Text style={styles.descriptionRight}>
                  {`IMDB: ${omdb.imdbRating} (${omdb.imdbVotes})\n`}
                </Text>
              )}
              <Button
                color={"#57575757"}
                title={"Spila stiklu"}
                onPress={() =>
                  navigation.navigate("VideoPlayer", movie.trailers)
                }
              />
            </View>
          </View>
          {!movie.plot ? null : (
            <Text style={styles.description}>{`\n${movie.plot}\n`}</Text>
          )}
          <Text style={styles.cinemaName}>
            {selectedCinema.name}
            <Text style={styles.description}> - Sýningatímar</Text>
          </Text>
          {filteredShowtimes[0]
            ? filteredShowtimes[0].schedule.map((time, index) => {
                return (
                  <Text
                    style={styles.description}
                    key={index}
                    onPress={() => Linking.openURL(time.purchase_url)}
                  >
                    {time.time} -{" "}
                    {time.purchase_url == "" ? null : (
                      <Text style={styles.hyperlink}>Kaupa miða</Text>
                    )}
                  </Text>
                );
              })
            : null}
        </View>
      </View>
      <BackButton />
    </>
  );
};

export default MovieScreen;
