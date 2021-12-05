/* eslint-disable no-unused-vars */
import {
  Card, CardContent, Grid, Typography,
} from '@material-ui/core';
import cx from 'classnames';
import React from 'react';
import CountUp from 'react-countup';
import styles from './Card.module.css';

const Cards = ({
  info: {
    country, cases, updated, deaths, todayCases, todayDeaths,
    countryInfo: { flag }, recovered, active, continent, population,
  },
}) => {
  console.log(cases);
  console.log(country);
  console.log(active);
  console.log(recovered);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              country name
              {country}
            </Typography>
            <Typography variant="h5">
              active cases:
              <CountUp start={0} end={active} duration={2.0} separator="," />
            </Typography>
            <Typography color="textSecondary" />
            <Typography variant="body2">
              Number of infected people:
              <CountUp start={0} end={cases} duration={2.0} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered} duration={2.0} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
            <Typography variant="body2">
              Number of recovered people
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths} duration={2.0} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
            <Typography variant="body2">
              Number of deaths by Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
