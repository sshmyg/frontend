import {ADD_COMMENT} from './constants';

export function actionCommentAdd(text) {
    return {
        type: ADD_COMMENT,
        text
    };
}