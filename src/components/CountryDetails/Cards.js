// import {
//   Card, CardContent, Grid, Typography,
// } from '@material-ui/core';
// import cx from 'classnames';
import React from 'react';
// import CountUp from 'react-countup';
import styles from './Card.module.css';

const Cards = ({
  info: {
    country, cases, countryInfo, recovered,
  },
}) => {
  console.log(country);
  console.log(countryInfo);
  console.log(cases);
  console.log(recovered);
  return (
    <div className={styles.container}>
      {/* <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              country name
              {country}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2.0} separator="," />
            </Typography>
            <Typography color="textSecondary" />
            <Typography variant="body2">
              Number of infected people
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2.0} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of recovered people
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2.0} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of deaths by Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid> */}
    </div>
  );
};
export default Cards;
