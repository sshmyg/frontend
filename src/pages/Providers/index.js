import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import IntlProvider from './Intl';

export default function Providers({
    store,
    children
}) {
    return (
        <Provider store={store}>
            <IntlProvider>
                { children }
            </IntlProvider>
        </Provider>
    );
}

Providers.propTypes = {
    store: PropTypes.object.isRequired,
    children: PropTypes.node
};
