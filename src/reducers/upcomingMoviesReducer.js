import * as constants from "../constants";

const initialState = {
  upcomingMovies: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.GET_UPCOMING_MOVIES:
      return action.payload;
    default:
      return state;
  }
}
