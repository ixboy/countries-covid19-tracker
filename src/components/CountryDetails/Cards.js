/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import {
  Card, CardContent, Grid, Typography
} from '@material-ui/core';
import cx from 'classnames';
import React from 'react';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = ({
  info: {
    continent, country, cases, updated, deaths, todayCases, tests, todayDeaths,
    recovered, active, population, todayRecovered,
  },
}) => (
  <div className={styles.container}>
    <Grid container spacing={3} justifyContent="center">
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            <small>Total number of cases</small>
            <br />
          </Typography>
          <CountUp start={0} end={cases} duration={2.0} separator="," />
          <br />
          <br />
          <Typography variant="body2">
            <small>Today&lsquo;s cases</small>
            <br />
            <CountUp start={0} end={todayCases} duration={2.0} separator="," />
          </Typography>
          <Typography variant="body1">
            <small>Total population</small>
            <br />
            <CountUp start={0} end={population} duration={2.0} separator="," />
          </Typography>
          <br />
          <Typography color="textSecondary">
            <small>continent</small>
          </Typography>
          <span>{continent}</span>
        </CardContent>
      </Grid>
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            <small>Total number of recovered</small>
            <br />
          </Typography>
          <CountUp start={0} end={recovered} duration={2.0} separator="," />
          <br />
          <br />
          <Typography variant="body2">
            <small>Active cases</small>
            <br />
            <CountUp start={0} end={active} duration={2.0} separator="," />
          </Typography>
          <Typography variant="body1">
            <small>Total number of tested </small>
            <br />
            <CountUp start={0} end={tests} duration={2.0} separator="," />
          </Typography>
          <br />
          <Typography color="textSecondary">
            <small>Recovered today</small>
          </Typography>
          <span>{todayRecovered}</span>
        </CardContent>
      </Grid>
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            <small>Total number of deaths</small>
            <br />
          </Typography>
          <CountUp start={0} end={deaths} duration={2.0} separator="," />
          <br />
          <br />
          <Typography variant="body2">
            <small>Today&lsquo;s deaths</small>
            <br />
            <CountUp start={0} end={todayDeaths} duration={2.0} separator="," />
          </Typography>
          <br />
          <Typography color="textSecondary">
            <small>Updated</small>
          </Typography>
          <span>
            <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
          </span>
        </CardContent>
      </Grid>
    </Grid>
  </div>
);
export default Cards;
