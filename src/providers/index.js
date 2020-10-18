import React from 'react';
import PropTypes from 'prop-types';

import { LocalizationProvider } from '@/providers/Localization';

export const Providers = ({ children }) => (
  <LocalizationProvider>{children}</LocalizationProvider>
);

Providers.propTypes = {
  children: PropTypes.node,
};
