import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import { CountryDetails, ListCountries } from './components';

const App = () => (
  <div className={styles.container}>
    <h1>Hello World</h1>
    <Switch>
      <Route path="/" component={ListCountries} exact />
      <Route path="/country" component={CountryDetails} exact />
    </Switch>
  </div>
);

export default App;
