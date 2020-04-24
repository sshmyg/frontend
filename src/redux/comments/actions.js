import c from './constants';

export function actionCommentAdd(text) {
  return {
    type: c.ADD_COMMENT,
    text,
  };
}
