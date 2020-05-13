import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import LocalizationProvider from '@/providers/Localization';

interface ProvidersProps {
  store: Store;
}

export const Providers: React.FC<ProvidersProps> = ({ store, children }) => {
  return (
    <Provider store={store}>
      <LocalizationProvider>{children}</LocalizationProvider>
    </Provider>
  );
};
