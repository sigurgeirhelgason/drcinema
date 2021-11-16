import * as constants from "../constants";

const initialState = {
  cinemas: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.GET_ALL_CINEMAS:
      return action.payload;
    default:
      return state;
  }
}
