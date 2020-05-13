import c from './constants';

export function addComment(text) {
  return {
    type: c.ADD_COMMENT,
    payload: { text },
  };
}
