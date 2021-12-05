import getCountryData, { GET_ALLCOUNTRIES } from '../../components/api';

const initialState = {
  allCountries: [],
};

function worldCountries(payload) {
  return { type: GET_ALLCOUNTRIES, allCountries: payload };
}

const worldCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLCOUNTRIES:
      return { ...state, allCountries: action.allCountries };
    default:
      return state;
  }
};

export const fetchCountries = () => async (dispatch) => {
  const action = { type: GET_ALLCOUNTRIES };
  const allCountries = await getCountryData(action);
  dispatch(worldCountries(allCountries));
};

export default worldCountriesReducer;
