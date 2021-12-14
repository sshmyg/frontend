import React, { Suspense, lazy } from 'react';

import { MainLayout } from '@/layouts';
import { BrowserRouter, Route, Routes } from '@/components';

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
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/inner" element={<InnerPage />} />
        </Route>

        <Route path="*" element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
