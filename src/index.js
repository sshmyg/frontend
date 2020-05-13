// import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';

import { Providers } from '@/providers';
import getStore from '@/redux/createStore';

const { store } = getStore();
const rootEl = document.getElementById('root');
const render = () => {
  const Router = require('./Router').default;

  ReactDOM.render(
    <Providers store={store}>
      <Router />
    </Providers>,
    rootEl,
  );
};

if (module.hot) {
  module.hot.accept('./Router', () => {
    setTimeout(render);
  });
}

render();
