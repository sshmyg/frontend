import React, { Fragment } from 'react';

import { Header } from '@/layouts/Header';
import { Footer } from '@/layouts/Footer';

import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <Fragment>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </Fragment>
);
