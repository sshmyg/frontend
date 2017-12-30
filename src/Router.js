import React from 'react';
import {
    Router,
    Route
} from 'react-router';

import Layout from 'app/components/Layout';

export default function RouterWrapper({ history }) {
    return (
        <Router history={history}>
            <Route path="/" component={Layout}>

            </Route>
        </Router>
    );
}