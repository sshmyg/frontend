import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import messages from 'app/locales';

export default function LocalizationProvider({ children }) {
  const { lang } = useSelector(state => ({ lang: state.session.lang }));

  return (
    <IntlProvider
      textComponent={Fragment}
      messages={messages[lang]}
      locale={lang}
    >
      {children}
    </IntlProvider>
  );
}

LocalizationProvider.propTypes = {
  children: PropTypes.node
};
