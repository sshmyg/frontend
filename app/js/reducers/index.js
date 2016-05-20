import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import comments from './comments';

const rootReducer = combineReducers({comments, routing: routerReducer });

export default rootReducer;