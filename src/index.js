import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import getStore from 'app/redux/createStore';

const { store } = getStore();
const rootEl = document.getElementById('root');
const render = () => {
    const Router = require('./Router').default;

    ReactDOM.render(
        <Provider store={store}>
            <Router />
        </Provider>,
        rootEl
    );
};

if (module.hot) {
    module.hot.accept('./Router', () => {
        setTimeout(render);
    });
}

render();
