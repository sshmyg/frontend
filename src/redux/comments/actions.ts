import { ActionCreator, Action } from 'redux';

import c from './constants';

export interface AddCommentAction extends Action {
  type: typeof c.ADD_COMMENT;
  text: string;
}

export type AddCommentActionCreator = ActionCreator<AddCommentAction>;

export const actionCommentAdd: AddCommentActionCreator = (text: string) => ({
  type: c.ADD_COMMENT,
  text,
});
