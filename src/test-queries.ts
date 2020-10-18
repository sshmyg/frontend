import { queryHelpers, buildQueries } from '@testing-library/react';

// TODO: types
// @ts-ignore
const queryByDataId = (...args) =>
  // @ts-ignore
  queryHelpers.queryAllByAttribute('data-id', ...args);

// @ts-ignore
const [getByDataId] = buildQueries(queryByDataId);

export { getByDataId };
