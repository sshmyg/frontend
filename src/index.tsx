import { createRoot } from 'react-dom/client';

import { Providers } from '@/providers';

import Router from './Router';
import { initLocalization } from './i18n';

import './index.module.css';

(async () => {
  try {
    const container = document.getElementById('root');

    if (!container) {
      throw new Error('DOM container was not found');
    }

    const root = createRoot(container);

    await initLocalization();

    root.render(
      <Providers>
        <Router />
      </Providers>,
    );
  } catch (error) {
    console.error('ERROR: localization init', error);
  }
})();
