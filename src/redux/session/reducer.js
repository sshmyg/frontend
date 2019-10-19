import c from './constants';

const defaultState = {
  lang: 'en'
};

export default function commentsReducer(
  state = defaultState,
  { type, payload }
) {
  switch (type) {
    case c.SET_LANG:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
}
