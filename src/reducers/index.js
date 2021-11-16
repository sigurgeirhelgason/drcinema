import { combineReducers } from 'redux';
import cinemas from './cinemasReducer';
import movies from './moviesReducer';
import upcomingMovies from './upcomingMoviesReducer';
import token from './refreshTokens';

export default combineReducers({
  cinemas,
  movies,
  upcomingMovies,
  token,
});
