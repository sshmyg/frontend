import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { Providers } from '@/providers';

import Router from './Router';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <Providers>
      <Router />
    </Providers>
  </StrictMode>,
  rootEl,
);
