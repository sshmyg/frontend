import React from 'react';
import { IntlProvider } from 'react-intl';

import messages from '@/locales';
import { useSelector } from '@/hooks';

if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/dist/locale-data/zh');
}

// @ts-ignore
if (!Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/zh');
}

// @ts-ignore
if (!Intl.DisplayNames) {
  require('@formatjs/intl-displaynames/polyfill');
  require('@formatjs/intl-displaynames/dist/locale-data/zh');
}

export const LocalizationProvider: React.FC<{}> = ({ children }) => {
  const { lang } = useSelector((state) => ({ lang: state.session.lang }));

  return (
    <IntlProvider messages={messages[lang]} locale={lang}>
      {children}
    </IntlProvider>
  );
};

export default LocalizationProvider;
