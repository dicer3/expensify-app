
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Approuter from './routers/approuter';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import Config_store from './store/config_store.js';
import {add_expense,edit_expense,remove_expense} from './actions/expenses';
import {set_text_filter,sort_by_amount,sort_by_date,set_start_date,set_end_date} from './actions/filters';
import get_visible_expenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
const store=Config_store;
/*store.subscribe(()=>
 {  const state=store.getState();
    const visible_expenses=get_visible_expenses(state.expenses,state.filters);
    console.log(visible_expenses);
    //console.log(store.getState());
    //console.log(state.expenses);
 })*/
;
console.log('hello');
const approot=document.getElementById("app");
const jsx=
(   <Provider store={store}>
        <Approuter />
    </Provider>
)
ReactDOM.render(jsx,approot);