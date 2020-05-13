import { combineReducers, Reducer } from 'redux';

import { AppState } from '@/types';

import comments from './comments/reducer';
import session from './session/reducer';

export const reducersMap = {
  comments,
  session,
};

const getReducers = (): Reducer<AppState> => combineReducers(reducersMap);

export default getReducers;
