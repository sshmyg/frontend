import React from 'react';

import { LocalizationProvider } from './Localization';

export const Providers: React.FC<{}> = ({ children }) => {
  return <LocalizationProvider>{children}</LocalizationProvider>;
};
