import React from 'react';
import { Provider } from 'react-redux';
import {
    Router,
    Route
} from 'react-router';

import getStore from 'app/redux/createStore';

import Layout from 'app/components/Layout';

const {
    store,
    history
} = getStore();

export default (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Layout}>

            </Route>
        </Router>
    </Provider>
);