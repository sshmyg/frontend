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

export default function RouterWrapper(): React.ReactNode {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          {(props): React.ReactNode => (
            <Layout {...props}>
              <Suspense fallback={<h1>Loading...</h1>}>
                <Route exact path="/" component={HomePage} />
                <Route path="/inner" component={InnerPage} />
              </Suspense>
            </Layout>
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
