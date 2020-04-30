import React from 'react';

import { Header } from 'app/layouts/Header';
import { Footer } from 'app/layouts/Footer';

import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className="l-main">{children}</main>
      <Footer />
    </div>
  );
};
