import React from "react";
import { StatusBar, Text, View, Linking, Image, Button } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";

const ViewUpcomingMovieScreen=({ route, navigation }) => {
  const movie=route.params;
  let omdb;
  try {
    if (movie.omdb.length>0) {
      omdb=movie.omdb[0];
    } else {
      omdb=null;
    }
  } catch (err) {
    omdb=null;
  }


  function getDateFromMonthYear(input) {
    const months=["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    const parts=input.split(" ");
    if (parts.length!=2) throw Error(`Expected 2 parts, got ${parts.length}: "${input}"`);
    const [searchMonth, year]=parts;
    const month=months.indexOf(searchMonth.toLowerCase());
    if (month<0) throw Error(`Unknown month: "${searchMonth}"`);
    return new Date(year, month, 1);
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
              {movie.genres.length>0&&movie.genres[0].Name
                ? movie.genres.map((genre, index) => {
                  return (
                    <Text style={styles.descriptionRight} key={index}>
                      {`${genre.Name} `}
                    </Text>
                  );
                })
                :null}

              {movie.durationMinutes==""? null:(
                <Text style={styles.descriptionRight}>
                  {`\n`}Lengd {movie.durationMinutes} mín{" "}
                </Text>
              )}
              {omdb===null? null:(
                <Text style={styles.descriptionRight}>
                  {`IMDB: ${omdb.imdbRating} (${omdb.imdbVotes})\n`}
                </Text>
              )}
            </View>
          </View>
          {!movie.plot? null:(
            <Text style={styles.description}>{`\n${movie.plot}\n`}</Text>
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
    </>
  );
};

export default ViewUpcomingMovieScreen;
