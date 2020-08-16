// import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';

import { Providers } from '@/providers';
import getStore from '@/redux/createStore';

import Router from './Router';

const { store } = getStore();
const rootEl = document.getElementById('root');

ReactDOM.render(
  <Providers store={store}>
    <Router />
  </Providers>,
  rootEl,
);
