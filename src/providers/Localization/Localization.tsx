import React, { createContext, useState } from 'react';
import { IntlProvider } from 'react-intl';

import messages from '@/locales';

type TLang = 'en' | 'ru';

interface ContextProps {
  lang: TLang;
  setLang: (lang: TLang) => void;
}

export const localeContext = createContext<ContextProps>({
  lang: 'en',
  setLang: () => {},
});
const { Provider } = localeContext;

export const LocalizationProvider: React.FC<{}> = ({ children }) => {
  const [lang, setLang] = useState<TLang>('en');

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
