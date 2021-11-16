import * as constants from "../constants";

const upcomingMoviesService = () => {
  return {
    getUpcomingMovies: () =>
      fetch(constants.ENDPOINT + "upcoming", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": constants.TOKEN,
        },
      }).then((response) => response.json()),
  };
};

export default upcomingMoviesService();
