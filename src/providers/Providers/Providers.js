import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import LocalizationProvider from '@/providers/Localization';

export const Providers = ({ store, children }) => {
  return (
    <Provider store={store}>
      <LocalizationProvider>{children}</LocalizationProvider>
    </Provider>
  );
};

Providers.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.node,
};
