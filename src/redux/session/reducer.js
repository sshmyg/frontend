import c from './constants';

const defaultState = {
  lang: 'en',
};

const sessionReducer = (state = defaultState, { type, payload }) => {
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

export default sessionReducer;
