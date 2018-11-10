import { combineReducers } from 'redux';

import comments from './comments/reducer';
import session from './session/reducer';

export const reducersMap = {
    comments,
    session
};

export default function() {
    return combineReducers(reducersMap);
}
