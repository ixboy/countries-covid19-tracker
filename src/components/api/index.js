import axios from 'axios';
// const url = 'https://covid19.mathdro.id/api';

export const GET_COUNTRY = 'country';
export const GET_ALLCOUNTRIES = 'worldCountries';
const API = 'https://disease.sh/v3/covid-19/countries';

const fetchWorldCountriesData = async () => {
  try {
    const { data } = await axios.get(API);
    console.log(data[0].country);
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
