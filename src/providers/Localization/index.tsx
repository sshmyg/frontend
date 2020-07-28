import React from 'react';
import { IntlProvider } from 'react-intl';

import messages from '@/locales';
import { useSelector } from '@/hooks';

// Poliffiles https://formatjs.io/docs/polyfills
export const LocalizationProvider: React.FC<> = ({ children }) => {
  const { lang } = useSelector((state) => ({ lang: state.session.lang }));

  return (
    <IntlProvider messages={messages[lang]} locale={lang} defaultLocale="en">
      {children}
    </IntlProvider>
  );
};

export default LocalizationProvider;
