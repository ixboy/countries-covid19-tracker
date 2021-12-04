import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cards from './Cards';
import styles from './CountryDetails.module.css';

const CountryDetails = () => {
  const { name: country } = useParams();
  const countryInfo = useSelector((state) => state.worldCountriesReducer.allCountries.find(
    (obj) => obj.country === country,
  ));
  console.log(countryInfo);
  return (
    <div className={styles.container}>
      <h1>{country}</h1>
      <div>
        <img className={styles.image} src={countryInfo.countryInfo.flag} alt="Flag" />
      </div>
      <Cards info={countryInfo} />
    </div>
  );
};

export default CountryDetails;
