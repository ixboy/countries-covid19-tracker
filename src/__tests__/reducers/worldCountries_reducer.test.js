import countriesReducer from '../../redux/worldCountries/worldCountries';

const apiData = [{
  "updated": 1638671097863,
  "country": "Afghanistan",
  "countryInfo": {
    "_id": 4,
    "iso2": "AF",
    "iso3": "AFG",
    "lat": 33,
    "long": 65,
    "flag": "https://disease.sh/assets/img/flags/af.png"
  },
  "cases": 157431,
  "todayCases": 0,
  "deaths": 7312,
  "todayDeaths": 0,
  "recovered": 140617,
  "todayRecovered": 0,
  "active": 9502,
  "critical": 1124,
  "casesPerOneMillion": 3919,
  "deathsPerOneMillion": 182,
  "tests": 795556,
  "testsPerOneMillion": 19803,
  "population": 40174039,
  "continent": "Asia",
  "oneCasePerPeople": 255,
  "oneDeathPerPeople": 5494,
  "oneTestPerPeople": 50,
  "activePerOneMillion": 236.52,
  "recoveredPerOneMillion": 3500.2,
  "criticalPerOneMillion": 27.98
},
{
  "updated": 1638671097771,
  "country": "Algeria",
  "countryInfo": {
    "_id": 12,
    "iso2": "DZ",
    "iso3": "DZA",
    "lat": 28,
    "long": 3,
    "flag": "https://disease.sh/assets/img/flags/dz.png"
  },
  "cases": 211297,
  "todayCases": 0,
  "deaths": 6096,
  "todayDeaths": 0,
  "recovered": 145054,
  "todayRecovered": 0,
  "active": 60147,
  "critical": 15,
  "casesPerOneMillion": 4698,
  "deathsPerOneMillion": 136,
  "tests": 230861,
  "testsPerOneMillion": 5133,
  "population": 44976741,
  "continent": "Africa",
  "oneCasePerPeople": 213,
  "oneDeathPerPeople": 7378,
  "oneTestPerPeople": 195,
  "activePerOneMillion": 1337.29,
  "recoveredPerOneMillion": 3225.09,
  "criticalPerOneMillion": 0.33
},]

describe('InitialState', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };
    const initialState = {
      countries: [],
    };
    expect(countriesReducer(undefined, action)).toEqual(initialState);
  });
});

describe('countriesReducer', () => {
  test('return the correct state', () => {
    const action = { type: 'worldCountries', allCountries: apiData };
    const expectedState = { countries: [], allCountries: action.allCountries };
    expect(countriesReducer(undefined, action)).toEqual(expectedState);
  });
});

describe('countriesReducer', () => {
  test('expect returned state to not equal expected state', () => {
    const action = { type: "worldCountries", allCountries: [] };
    const expectedState = [...action.allCountries];
    expect(countriesReducer(undefined, action)).not.toEqual(expectedState);
  });
});
