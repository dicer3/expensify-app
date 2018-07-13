
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Approuter,{history} from './routers/approuter';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import Config_store from './store/config_store.js';
import {start_set_expense} from './actions/expenses';
import {login,logout} from './actions/auth';
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
let has_render=false;
const render_app=()=>
{
    if(!has_render)
    {
        ReactDOM.render(jsx,approot);
        has_render=true;
    }
       
}
ReactDOM.render(<p>loading..</p>,approot);

store.dispatch(start_set_expense()).then(()=>
{  console.log('is this comming here');
    ReactDOM.render(jsx,approot);
})
firebase.auth().onAuthStateChanged((user)=>
{
   if(user)
      {   
          store.dispatch(login(user.uid));
          console.log('login',user.uid);
          store.dispatch(start_set_expense()).then(()=>
           {
             console.log('is this comming here');
             render_app();
             if(history.location.pathname==='/')
                     history.push('/dashboard');
          })
      }    
    else
    {
      store.dispatch(logout());
      render_app();
      console.log('logout');
      history.push('/');
    }       
})