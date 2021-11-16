import * as constants from "../constants";

const initialState = {
  movies: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.GET_ALL_MOVIES:
      return action.payload;
    default:
      return state;
  }
}
