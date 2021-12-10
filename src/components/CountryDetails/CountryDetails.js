import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountries } from '../../redux/worldCountries/worldCountries';
import Cards from './Cards';
import styles from './CountryDetails.module.css';

const CountryDetails = () => {
  const { name: country } = useParams();
  let countryInfo;
  const dispatch = useDispatch();
  countryInfo = useSelector((state) => state.worldCountriesReducer.allCountries);
  useEffect(() => {
    if (!countryInfo) {
      dispatch(fetchCountries());
    }
  }, []);

  if (!countryInfo) return <div className={styles.loader} />;
  if (countryInfo.constructor.name === 'Array') {
    countryInfo = countryInfo.find((obj) => obj.country === country);
  }
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
