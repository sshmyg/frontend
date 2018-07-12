import { combineReducers } from 'redux';

import comments from './comments/reducer';

export const reducersMap = {
    comments
};

export default function() {
    return combineReducers(reducersMap);
}