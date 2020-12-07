import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Layout } from '@/layouts';

const HomePage = lazy(
  () =>
    import(
      '@/pages/Home'
      /* webpackChunkName: "HomePage" */
      /* webpackPrefetch: true */
    ),
);

const InnerPage = lazy(
  () =>
    import(
      '@/pages/Inner'
      /* webpackChunkName: "InnerPage" */
      /* webpackPrefetch: true */
    ),
);

const NotFound = () => <p>404</p>;

export const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/">
          <Layout>
            <Route exact path="/" component={HomePage} />
            <Route path="/inner" component={InnerPage} />
          </Layout>
        </Route>

        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
