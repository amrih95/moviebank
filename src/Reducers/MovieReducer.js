import { FETCH_MOVIES, GET_MOVIE } from '../Constants/Actions.constants';

const initialState = {
  movies: [],
  movie: null,
  isFetching: true,
  current: 1,
  error:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        isFetching: false,
        current: action.current,
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        isFetching: false,
        error:action.error,
      };
    default:
      return state;
  }
};
