import React from 'react';
import {render} from 'react-dom';
import 'babel-polyfill';

import Router from 'Router';

render(Router, document.getElementById('root'));

console.log('App started');