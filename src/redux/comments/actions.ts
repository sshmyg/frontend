import c from './constants';

import { Comment, ActionCreator } from '@/types';

type AddCommentPayload = Comment;

export interface AddCommentAction {
  type: typeof c.ADD_COMMENT;
  payload: AddCommentPayload;
}

export type AddCommentActionCreator = ActionCreator<
  AddCommentPayload,
  AddCommentAction
>;

export const addComment: AddCommentActionCreator = (
  payload: AddCommentPayload,
) => ({
  type: c.ADD_COMMENT,
  payload,
});
