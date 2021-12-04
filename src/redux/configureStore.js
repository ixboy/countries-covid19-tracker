import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countryReducer from './country/country';
import worldCountriesReducer from './worldCountries/worldCountries';

const reducers = combineReducers({ worldCountriesReducer, countryReducer });

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger),
);

export default store;
