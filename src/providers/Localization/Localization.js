import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import messages from '@/locales';

export const localeContext = createContext({ lang: 'en' });
const { Provider } = localeContext;

export const LocalizationProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  return (
    <Provider
      value={{
        lang,
        setLang,
      }}
    >
      <IntlProvider messages={messages[lang]} locale={lang} defaultLocale="en">
        {children}
      </IntlProvider>
    </Provider>
  );
};

LocalizationProvider.propTypes = {
  children: PropTypes.node,
};
