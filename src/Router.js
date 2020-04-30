import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Layout } from 'app/layouts';

const HomePage = lazy(() =>
  import(
    'app/pages/Home'
    /* webpackChunkName: "HomePage" */
    /* webpackPrefetch: true */
  ),
);

const InnerPage = lazy(() =>
  import(
    'app/pages/Inner'
    /* webpackChunkName: "InnerPage" */
    /* webpackPrefetch: true */
  ),
);

export default function RouterWrapper() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/">
            {(props) => (
              <Layout {...props}>
                <Route exact path="/" component={HomePage} />
                <Route path="/inner" component={InnerPage} />
              </Layout>
            )}
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
