import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { Modalize } from "react-native-modalize";
import { useNavigation } from "@react-navigation/native";

const MoviesList = ({ movies, cinema }) => {
  const navigation = useNavigation();

  /**
   * Modal in progress
   *
   */

  modal = React.createRef();

  // openModal = () => {
  //   if (modal.current) {
  //     modal.current.open();
  //   }
  // };

  closeModal = (dest) => {
    if (modal.current) {
      modal.current.close(dest);
    }
  };
  /**
   * Modal in progress
   *
   */

  const selectedCinema = cinema.params;

  function hasShowTimeWithCinema(movie) {
    for (let i = 0; i < movie.showtimes.length; i++) {
      if (movie.showtimes[i].cinema.id == selectedCinema.id) {
        return true;
      } else if (movie.showtimes[i].cinemas == selectedCinema.id) {
        return true;
      }
    }
    return false;
  }

  function getMoviesForCinema(movies) {
    try {
      return movies.filter((movie) => hasShowTimeWithCinema(movie));
    } catch (err) {
      return;
    }
  }

  return (
    <Modalize
      withOverlay={false}
      adjustToContentHeight={false}
      alwaysOpen={270}
      flatListProps={{
        data: getMoviesForCinema(movies),
        keyExtractor: (item) => item.id.toString(),
        showsVerticalScrollIndicator: false,
        renderItem: ({ item }) => (
          <View style={styles.listItemContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Movie", {
                  item,
                  selectedCinema,
                })
              }
            >
              <View style={styles.itemRow}>
                <View style={styles.itemColumn}>
                  {item.omdb.map((image, index = item.id) => {
                    return (
                      <Image
                        style={styles.image}
                        key={index}
                        source={{ uri: image.Poster.toString() }}
                      />
                    );
                  })}
                </View>
                <View style={styles.itemColumnText}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemDescription}>
                    {item.plot && item.plot.length > 0
                      ? item.plot.slice(0, 70) + "..."
                      : null}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ),
      }}
    />
  );
};

const mapStateToProps = ({ movies }) => ({ movies });

export default connect(mapStateToProps)(MoviesList);
