import { queryHelpers, buildQueries } from '@testing-library/react';

const queryByDataId = (...args) =>
  queryHelpers.queryAllByAttribute('data-id', ...args);

const [getByDataId] = buildQueries(queryByDataId);

export { getByDataId };
