const defaultState = {
    lang: 'en'
};

export default function commentsReducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'lang':
            return {
                ...state,
                ...payload
            };

        default:
            return state;
    }
}
