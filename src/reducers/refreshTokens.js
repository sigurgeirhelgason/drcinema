import * as constants from '../constants';

const initialState = {
  token: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.REFRESH_TOKEN:
      return action.payload;
    default:
      return state;
  }
}
