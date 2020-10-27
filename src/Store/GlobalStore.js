import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from '../Reducers/RootReducers';
import thunk from 'redux-thunk';

const initialState = {};

const globalStore = () =>
  createStore(
    RootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );

export default globalStore;
