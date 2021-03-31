import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header>
        <ul className={styles.navList}>
          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/tv">TV</a>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
