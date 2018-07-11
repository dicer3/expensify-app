
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Approuter from './routers/approuter';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import Config_store from './store/config_store.js';
import {start_set_expense} from './actions/expenses';
import {set_text_filter,sort_by_amount,sort_by_date,set_start_date,set_end_date} from './actions/filters';
import get_visible_expenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';

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
ReactDOM.render(<p>loading..</p>,approot);

store.dispatch(start_set_expense()).then(()=>
{  console.log('is this comming here');
    ReactDOM.render(jsx,approot);
})
firebase.auth().onAuthStateChanged((user)=>
{
   if(user)
      console.log('log in');
    else
       console.log('log out');     
})