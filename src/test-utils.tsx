import React, { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n-test';

// Localization provider only for tests
const I18nProvider: React.FC = ({ children }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult =>
  render(ui, {
    wrapper: I18nProvider,
    ...options,
  });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

export { default as userEvent } from '@testing-library/user-event';
export { prettyDOM } from '@testing-library/dom';
