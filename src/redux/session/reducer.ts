import { Reducer } from 'redux';

import c from './constants';

const defaultState = {
  lang: 'en',
};

const commentsReducer: Reducer<typeof defaultState> = (
  state = defaultState,
  { type, payload },
) => {
  switch (type) {
    case c.SET_LANG:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default commentsReducer;
