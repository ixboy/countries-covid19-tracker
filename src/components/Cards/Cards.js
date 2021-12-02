import {
  Card, CardContent, Grid, Typography,
} from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';
import styles from './Card.module.css';

const Cards = ({
  data: {
    confirmed, recovered, deaths, lastUpdate,
  },
}) => {
  if (!confirmed) {
    return 'Loading...';
  }
  console.log(lastUpdate);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2.0} separator="," />
            </Typography>
            <Typography color="textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
            <Typography variant="body2">
              Number of infected people
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2.0} separator="," />
            </Typography>
            <Typography color="textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
            <Typography variant="body2">
              Number of recovered people
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2.0} separator="," />
            </Typography>
            <Typography color="textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
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
