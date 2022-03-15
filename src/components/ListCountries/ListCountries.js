/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CountUp from 'react-countup';
import { NavLink } from 'react-router-dom';
import { fetchCountries } from '../../redux/worldCountries/worldCountries';
import styles from './ListCountries.module.css';

const ListCountries = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.worldCountriesReducer.allCountries);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!allCountries) {
      dispatch(fetchCountries());
    }
  }, [dispatch]);

  if (!allCountries) return <div className={styles.loader} />;
  return (

    <div>
      <div>
        <form className={styles.searchForm}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Country name"
            aria-label="Search"
            onChange={({ target }) => {
              setSearch(target.value);
            }}
          />
        </form>
      </div>
      <div className={styles.container}>
        {
        allCountries
          .filter((item) => item.country.toLowerCase().includes(search.toLowerCase()))
          .map((country, i) => (
            <NavLink
              className={styles.link}
              to={`countries/${country.country}`}
              key={i}
            >
              <div className={styles.item}>
                <div className={styles.firstDiv}>
                  <h2 className={styles.name}>{country.country}</h2>
                  <img className={styles.image} src={country.countryInfo.flag} alt="Flag" />
                </div>
                <div>
                  <h3>Total Covid cases:</h3>
                  <span className={styles.infected}>
                    <CountUp start={0} end={country.cases} duration={2.0} separator="," />
                  </span>
                </div>
                <div>
                  <h3>Recovered:</h3>
                  <span className={styles.recovered}>
                    <CountUp start={0} end={country.recovered} duration={2.0} separator="," />
                  </span>
                </div>
              </div>
            </NavLink>
          ))
      }
        ;
      </div>
    </div>
  );
};

export default ListCountries;
