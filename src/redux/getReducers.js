import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import comments from './comments/reducer';

export const reducersMap = {
    routing: routerReducer,
    comments
};

export default function() {
    return combineReducers(reducersMap);
}