import React from 'react';

import styles from './Logo.module.css';
import logo from './logo.png';

interface LogoProps {
  src?: string;
}

export const Logo: React.FC<LogoProps> = ({ src = logo }) => (
  <h1 data-testid="c-logo" className={styles.logo}>
    <a href="/" rel="home">
      <img className={styles.logoImg} src={src} alt="Logo" />
    </a>
  </h1>
);
