import { HashRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import { CountryDetails, ListCountries, Navbar } from './components';
import styles from './App.module.css';

const App = () => (
  <HashRouter basename="/">
    <div className={styles.container}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ListCountries />} />
        <Route path="/countries/:name" element={<CountryDetails />} />
      </Routes>
    </div>
  </HashRouter>
);

export default App;
