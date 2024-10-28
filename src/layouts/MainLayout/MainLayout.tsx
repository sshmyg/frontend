import React, { Fragment } from 'react';

import { Outlet } from '@/components';

import { Header, Footer } from './components';
import * as styles from './MainLayout.module.css';

export const MainLayout = () => (
  <Fragment>
    <Header />
    <main className={styles.main}>
      <Outlet context={{ testProp: 'Outlet context' }} />
    </main>
    <Footer />
  </Fragment>
);
