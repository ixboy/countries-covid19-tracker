import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const GET_COUNTRY = 'country/getCountry';
export const GET_ALLCOUNTRIES = 'world/getWorldCountries';
const API = 'https://disease.sh/v3/covid-19/countries';

const fetchAllCountriesData = async () => {
  try {
    const {
      data: {
        confirmed, recovered, deaths, lastUpdate,
      },
    } = await axios.get(url);
    return {
      confirmed, recovered, deaths, lastUpdate,
    };
  } catch (error) { return error; }
};

const getCountryData = async (action) => {
  let country;
  let countries;

  switch (action.type) {
    case GET_ALLCOUNTRIES:
      countries = await fetchAllCountriesData();
      return countries;
    case GET_COUNTRY:
      country = await fetchCountryData();
      return country;
    default:
      return 'Unrecognized action';
  }
};

export default getCountryData;
