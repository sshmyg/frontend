import React, { Fragment } from 'react';

import { Header } from '@/layouts/Header';
import { Footer } from '@/layouts/Footer';

import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </Fragment>
  );
};
