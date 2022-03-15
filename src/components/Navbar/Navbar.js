import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import React from 'react';
import logo from '../images/logo.png';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <div>
      <NavLink to="/">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.79-2.907L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.79-.407z" /></svg>
      </NavLink>
    </div>
    <div>
      <NavLink to="/"><img className={styles.logo} src={logo} alt="logo" /></NavLink>
    </div>
    <div className={styles.icons}>
      <FontAwesomeIcon icon={faMicrophone} />
      <FontAwesomeIcon icon={faGear} />
    </div>
  </nav>
);

export default Navbar;
