import {createStore, applyMiddleware, combineReducers} from 'redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';

//Reducers
import comments from 'redux/comments/reducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    comments
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;