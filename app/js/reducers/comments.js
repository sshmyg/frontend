import constants from 'constants';

export default function addComment(state = [], action) {
    if (action.type !== constants.comments.add) {
        return state;
    }
    
    //Never modify STATE, always clone it
    return [...state, action.text];
};