import React, { Fragment } from 'react';
import { render, queries } from '@testing-library/react';

import * as customQueries from './test-queries';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

const customRender = (ui, options) =>
  render(ui, {
    wrapper: AllTheProviders,
    queries: {
      ...queries,
      ...customQueries,
    },
    ...options,
  });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
