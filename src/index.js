import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import getStore from 'app/redux/createStore';

const { store, history } = getStore();
const rootEl = document.getElementById('root');
const render = () => {
    const Router = require('./Router').default;

    ReactDOM.render(
        <Provider store={store}>
            <Router history={history} />
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