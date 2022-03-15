import axios from 'axios';

export const GET_ALLCOUNTRIES = 'worldCountries';
const API = 'https://disease.sh/v3/covid-19/countries';

const fetchWorldCountriesData = async () => {
  try {
    const { data } = await axios.get(API);
    return data;
  } catch (error) { return error; }
};

const getCountryData = async (action) => {
  let countries;

  switch (action.type) {
    case GET_ALLCOUNTRIES:
      countries = await fetchWorldCountriesData();
      return countries;
    default:
      return 'Unrecognized action';
  }
};

export default getCountryData;
