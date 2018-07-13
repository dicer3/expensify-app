import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import expense_reducer from '../reducers/expenses.js';
import filter_reducer from '../reducers/filters.js';
import thunk from 'redux-thunk';
import login_reducer from '../reducers/auth';
const composeEnhanchers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    combineReducers({
        expenses: expense_reducer,
        filters: filter_reducer,
        auth: login_reducer,
    }),
    composeEnhanchers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;