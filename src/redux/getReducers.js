import { combineReducers } from 'redux';

import comments from './comments/reducer';
import session from './session/reducer';

export const reducersMap = {
  comments,
  session,
};

const getReducers = () => combineReducers(reducersMap);

export default getReducers;
