import React from 'react';
import ReactDOM from 'react-dom';

import { Providers } from '@/providers';

const rootEl = document.getElementById('root');
const render = () => {
  const Router = require('./Router').default;

  ReactDOM.render(
    <Providers>
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
