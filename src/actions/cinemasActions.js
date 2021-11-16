import cinemasService from "../services/cinemasService";
import * as constants from "../constants";

export const getAllCinemas = () => {
  return async (dispatch) => {
    try {
      const allCinemas = await cinemasService.getAllCinemas();

      dispatch(getAllCinemasSuccess(allCinemas));
    } catch (err) {
      console.log("Error getting getAllCinemas... API token");
    }
  };
};

const getAllCinemasSuccess = (allCinemas) => {
  return {
    type: constants.GET_ALL_CINEMAS,
    payload: allCinemas.sort((a, b) => a.name.localeCompare(b.name)),
  };
};
