import getCountryData, { GET_COUNTRY } from '../../components/api';

const initialState = {
  country: [],
};

function getCountry(payload) {
  return { type: GET_COUNTRY, country: payload };
}

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return { ...state, country: action.country };
    default:
      return state;
  }
};

export const fetchCountry = () => async (dispatch) => {
  const action = { type: GET_COUNTRY };
  const country = await getCountryData(action);
  dispatch(getCountry(country));
};

export default countryReducer;
