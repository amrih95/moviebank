import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer';

const RootReducer = combineReducers({
  moviereducer: MovieReducer,
});

export default RootReducer;
