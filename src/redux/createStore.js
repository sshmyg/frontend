
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createLogger } from 'redux-logger';
import {
    createStore,
    applyMiddleware
} from 'redux';

import getReducers from './getReducers';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(
        createLogger({
            collapsed: true
        })
    );
}

export default function(rootReducer = getReducers()) {
    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    );
    const history = syncHistoryWithStore(browserHistory, store);

    return {
        store,
        history
    };
}