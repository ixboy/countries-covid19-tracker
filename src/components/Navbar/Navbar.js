import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <div>
      <NavLink to="/"><img className={styles.logo} src={logo} alt="logo" /></NavLink>
    </div>
  </nav>
);

export default Navbar;
