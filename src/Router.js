import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Layout from 'app/pages/Layout';
import TestPage from 'app/pages/TestPage';

export default function RouterWrapper() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    {
                        props => (
                            <Layout {...props}>
                                <Route path="/test-page" component={TestPage} />
                            </Layout>
                        )
                    }
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
