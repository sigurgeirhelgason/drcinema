import getToken from '../services/refreshToken';
import ls from 'local-storage';
import * as constants from '../constants';

export const getNewToken = () => {
  return async (dispatch) => {
    try {
      getToken.then(() => {
        // console.log('Date: :\n', ls.get('date'));
        // console.log('tester:\n', ls.get('key'));
        // testy = ls.get('key');
        // console.log('testy2:\n', testy);
        const token = {
          key: ls.get('date'),
          date: ls.get('key'),
        };
        // console.log('token from refreshToken action:\n', token);
        dispatch(refreshTokenSuccess(token));
      });
    } catch (err) {
      console.log('Error from refreshToken action:\n', err);
    }
  };
};

const refreshTokenSuccess = (token) => {
  return {
    type: constants.REFRESH_TOKEN,
    payload: token,
  };
};
