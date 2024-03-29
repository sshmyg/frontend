import React, { ReactElement, ReactNode } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n-test';

interface I18nProviderProps {
  children: ReactNode;
}

// Localization provider only for tests
const I18nProvider = ({ children }: I18nProviderProps) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult =>
  render(ui, {
    wrapper: I18nProvider,
    ...options,
  });

// re-export everything
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
