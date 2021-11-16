import moviesService from "../services/moviesService";
import * as constants from "../constants";

export const getAllMovies = () => {
  return async (dispatch) => {
    try {
      const allMovies = await moviesService.getAllMovies();

      dispatch(getAllMoviesSuccess(allMovies));
    } catch (err) {
      console.log("ERROR", err);
    }
  };
};

const getAllMoviesSuccess = (allMovies) => {
  return {
    type: constants.GET_ALL_MOVIES,
    payload: allMovies,
  };
};
