import React from 'react';
import {Router,Route,Switch,Link,NavLink} from 'react-router-dom';
import Help_Page from '../components/help';
import Expense_Dashboard_Page from '../components/dashboard';
import Add_Expense_Page from '../components/create';
import Edit_Expense_Page from '../components/edit';
import Not_found_page from '../components/not_found';
import Login_Page from '../components/login_page';
import createHistory from 'history/createBrowserHistory';
import Privateroute from './private_route'
export const history=createHistory();
const Approuter=()=>
(
   <Router history={history}>
     <div>
    
        <Switch>
           <Privateroute path="/" component={Login_Page} exact={true} />
           <Privateroute path="/dashboard" component={Expense_Dashboard_Page}  />
           <Privateroute path="/create" component={Add_Expense_Page} />
           <Privateroute path="/edit/:id"  component={Edit_Expense_Page} />
           <Privateroute path="/help" component={Help_Page} />
           <Privateroute component={Not_found_page} />
         </Switch>   
     </div>
   </Router>
);
export default Approuter;