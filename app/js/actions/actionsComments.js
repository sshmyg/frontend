import constants from 'constants';

export function addComment(text) {
    return {
        type: constants.comments.add,
        text
    };
}