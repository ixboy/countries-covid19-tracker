import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cards from './Cards';

const CountryDetails = () => {
  const { name: country } = useParams();
  const countryInfo = useSelector((state) => state.worldCountriesReducer.allCountries.find(
    (obj) => obj.country === country,
  ));
  console.log(countryInfo);
  return (
    <div>
      <h1>Hello from details</h1>
      <h1>{country}</h1>
      <Cards info={countryInfo} />
    </div>
  );
};

export default CountryDetails;
