import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import worldReducer from './world/world';
import countryReducer from './country/country';

const reducers = combineReducers({ worldReducer, countryReducer });

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger),
);

export default store;