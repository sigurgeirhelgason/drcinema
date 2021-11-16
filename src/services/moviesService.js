import * as constants from "../constants";
import getToken from "./refreshToken";
import ls from "local-storage";

const moviesService = () => {
  return {
    getAllMovies: () =>
      fetch(constants.ENDPOINT + "movies", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": constants.TOKEN,
        },
      }).then((response) => response.json()),
  };
};

export default moviesService();
