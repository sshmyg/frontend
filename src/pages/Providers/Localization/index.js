import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import messages from 'app/locales';

if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/dist/locale-data/zh');
}

if (!Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/zh');
}

if (!Intl.DisplayNames) {
  require('@formatjs/intl-displaynames/polyfill');
  require('@formatjs/intl-displaynames/dist/locale-data/zh');
}

export default function LocalizationProvider({ children }) {
  const { lang } = useSelector((state) => ({ lang: state.session.lang }));

  return (
    <IntlProvider messages={messages[lang]} locale={lang}>
      {children}
    </IntlProvider>
  );
}

LocalizationProvider.propTypes = {
  children: PropTypes.node,
};
