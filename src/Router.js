import React from 'react';
import { Router } from '@reach/router';

import Layout from 'app/pages/Layout';
import TestPage from 'app/pages/TestPage';

export default function RouterWrapper() {
    return (
        <Router>
            <Layout path="/">
                <TestPage path="test-page" />
            </Layout>
        </Router>
    );
}