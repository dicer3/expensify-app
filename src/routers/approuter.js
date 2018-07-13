import React from 'react';
import {Router,Route,Switch,Link,NavLink} from 'react-router-dom';
import Help_Page from '../components/help';
import Expense_Dashboard_Page from '../components/dashboard';
import Add_Expense_Page from '../components/create';
import Edit_Expense_Page from '../components/edit';
import Not_found_page from '../components/not_found';
import Login_Page from '../components/login_page';
import createHistory from 'history/createBrowserHistory';
import Privateroute1 from './private_route';
import Publicroute1 from './public_route';
export const history=createHistory();
const Approuter=()=>
(
   <Router history={history}>
     <div>
    
        <Switch>
           <Publicroute1 path="/" component={Login_Page} exact={true} />
           <Privateroute1 path="/dashboard" component={Expense_Dashboard_Page}  />
           <Privateroute1 path="/create" component={Add_Expense_Page} />
           <Privateroute1 path="/edit/:id"  component={Edit_Expense_Page} />
           <Privateroute1 path="/help" component={Help_Page} />
           <Privateroute1 component={Not_found_page} />
         </Switch>   
     </div>
   </Router>
);
export default Approuter;