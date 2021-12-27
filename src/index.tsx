import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import { Providers } from '@/providers';

import Router from './Router';
import { initLocalization } from './i18n';

import './index.module.css';

const rootEl = document.getElementById('root');

(async () => {
  try {
    await initLocalization();

    render(
      <StrictMode>
        <Providers>
          <Router />
        </Providers>
      </StrictMode>,
      rootEl,
    );
  } catch (error) {
    console.error('ERROR: localization init', error);
  }
})();
