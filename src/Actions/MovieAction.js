import Axios from 'axios';
import { FETCH_MOVIES, GET_MOVIE } from '../Constants/Actions.constants';
import { API_KEY, API_URL } from '../Constants/Api.constants';

export const fetchMovies = (keyword = 'war', page = 1, year = 2019) => (
  dispatch
) => {
  let dest = `?s=${keyword}&page=${page}&y=${year}&plot=full&type=movie`;
  if (!page) {
    dest = `?s=${keyword}&y=${year}&plot=full&type=movie`;
  }
  const url = `${API_URL}${dest}${API_KEY}`;

  Axios.get(url)
    .then((res) => {
      dispatch({
        type: FETCH_MOVIES,
        payload: res.data,
        current: page,
      });
    })
    .catch((e) => {
      dispatch({
        type: FETCH_MOVIES,
        error: true,
      });
      throw e;
    });
};

export const getMovies = (keyword = 'tt7430722') => (dispatch) => {
  const dest = `?i=${keyword}`;
  const url = `${API_URL}${dest}${API_KEY}`;

  Axios.get(url)
    .then((res) => {
      dispatch({
        type: GET_MOVIE,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: GET_MOVIE,
        error: true,
      });
      throw e;
    });
};
