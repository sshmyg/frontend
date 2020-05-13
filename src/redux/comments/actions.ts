import { ActionCreator, Action } from 'redux';

import c from './constants';

import { Comment } from '@/types';

export interface AddCommentAction extends Action {
  type: typeof c.ADD_COMMENT;
  payload: Comment;
}

export type AddCommentActionCreator = ActionCreator<AddCommentAction>;

export const addComment: AddCommentActionCreator = (payload: Comment) => ({
  type: c.ADD_COMMENT,
  payload,
});
