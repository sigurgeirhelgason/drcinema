import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CinemasScreen from "../screens/CinemasScreen";
import CinemaDetailScreen from "../screens/CinemaDetailScreen";
import MovieScreen from "../screens/MovieScreen";
import UpcomingMoviesScreen from "../screens/UpcomingMoviesScreen";
import ViewUpcomingMovieScreen from "../screens/ViewUpcomingMovieScreen";
import VideoPlayer from "../screens/VideoPlayer";

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Cinemas"
        headerMode="none"
        screenOptions={{
          cardStyle: { backgroundColor: "transparent" },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
          }),
        }}
      >
        <Stack.Screen name="Cinemas" component={CinemasScreen} />
        <Stack.Screen name="CinemaDetail" component={CinemaDetailScreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
        <Stack.Screen name="UpcomingMovies" component={UpcomingMoviesScreen} />
        <Stack.Screen
          name="ViewUpcomingMovie"
          component={ViewUpcomingMovieScreen}
        />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
