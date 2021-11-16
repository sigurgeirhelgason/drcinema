import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { getUpcomingMovies } from '../../actions/upcomingMoviesActions';

class UpcomingMoviesList extends React.Component {
  componentDidMount() {
    this.props.getUpcomingMovies();
  }


  render() {
    const { upcomingMovies }=this.props;
    // console.log('this.props', this.props)
    //console.log('upcomingMovies', upcomingMovies)



    // function sortbydate() {
    //   return upcomingMovies.sort((a, b) => new Date(a['release-dateIS'])-new Date(b['release-dateIS']))
    // }

    return (
      <View style={styles.container}>
        <FlatList
          data={upcomingMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('ViewUpcomingMovie', item)
                }
              >
                <View style={styles.itemRow}>
                  <View style={styles.itemColumn}>
                    <Image
                      style={styles.image}
                      source={{ uri: item.poster.toString() }}
                    />
                  </View>
                  <View style={styles.itemColumnText}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemSubTitle}>
                      {item['release-dateIS']}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps=(state) => ({
  upcomingMovies: state.upcomingMovies,
});

const mapDispatchToProps={
  getUpcomingMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMoviesList);