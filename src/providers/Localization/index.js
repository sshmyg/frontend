import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import messages from '@/locales';

// Polyfills https://formatjs.io/docs/polyfills
export default function LocalizationProvider({ children }) {
  const { lang } = useSelector((state) => ({ lang: state.session.lang }));

  return (
    <IntlProvider messages={messages[lang]} locale={lang} defaultLocale="en">
      {children}
    </IntlProvider>
  );
}

LocalizationProvider.propTypes = {
  children: PropTypes.node,
};
