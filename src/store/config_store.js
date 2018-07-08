import {createStore,combineReducers} from 'redux';
import expense_reducer from '../reducers/expenses.js';
import filter_reducer from '../reducers/filters.js';
const store=createStore(
    combineReducers({
        expenses: expense_reducer,
        filters: filter_reducer
    }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;