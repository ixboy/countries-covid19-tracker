import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { CountryDetails, ListCountries, Navbar } from './components';

const App = () => (
  <Router>
    <div className={styles.container}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ListCountries />} />
        <Route path="/countries/:name" element={<CountryDetails />} />
      </Routes>
    </div>
  </Router>
);

export default App;
