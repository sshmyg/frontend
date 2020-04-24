import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Layout = lazy(() =>
  import(
    'app/pages/Layout'
    /* webpackChunkName: "Layout" */
    /* webpackPrefetch: true */
  ),
);

const TestPage = lazy(() =>
  import(
    'app/pages/TestPage'
    /* webpackChunkName: "TestPage" */
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
                <Route path="/test-page" component={TestPage} />
              </Layout>
            )}
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
