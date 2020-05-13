import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore as createStoreRedux, applyMiddleware, Store } from 'redux';

import getReducers from './getReducers';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(
    (createLogger as any)({
      collapsed: true,
    }),
  );
}

interface CreateStoreProps {
  store: Store;
}

export default function createStore(
  rootReducer = getReducers(),
): CreateStoreProps {
  const store = createStoreRedux(rootReducer, applyMiddleware(...middlewares));

  return {
    store,
  };
}
