/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../../redux/worldCountries/worldCountries';
import styles from './ListCountries.module.css';

const ListCountries = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.worldCountriesReducer.allCountries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  console.log(allCountries);

  if (!allCountries) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      {
        allCountries.map((country, i) => (
          <Link
            className={MovieListCSS.link}
            to={`countries/${country.country}`}
            key={i}
          >
            <div className={styles.item}>
              <div className={styles.firstDiv}>
                <h2 className={styles.name}>{country.country}</h2>
                <img className={styles.image} src={country.countryInfo.flag} alt="" />
              </div>
              <div>
                <h3 type="button">Total Covid cases:</h3>
                <span className={styles.infected}>
                  <CountUp start={0} end={country.cases} duration={2.0} separator="," />
                </span>
              </div>
              <div>
                <h3 type="button">Recovered:</h3>
                <span className={styles.recovered}>
                  <CountUp start={0} end={country.recovered} duration={2.0} separator="," />
                </span>
              </div>
            </div>
          </Link>
        ))
      }
      ;
    </div>
  );
};

export default ListCountries;
