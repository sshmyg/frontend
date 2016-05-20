import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect} from 'react-router';
import {Provider} from 'react-redux';

import Layout from 'Components/Layout';
import store, {history} from 'store';

export default (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Layout}>
                
            </Route>
        </Router>
    </Provider>
);