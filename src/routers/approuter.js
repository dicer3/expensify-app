import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Help_Page from '../components/help';
import Expense_Dashboard_Page from '../components/dashboard';
import Add_Expense_Page from '../components/create';
import Edit_Expense_Page from '../components/edit';
import Not_found_page from '../components/not_found';
import Header from '../components/header';
import Login_Page from '../components/login_page';

const Approuter=()=>
(
   <BrowserRouter>
     <div>
     <Header />
        <Switch>
           <Route path="/" component={Login_Page} exact={true} />
           <Route path="/dashboard" component={Expense_Dashboard_Page}  />
           <Route path="/create" component={Add_Expense_Page} />
           <Route path="/edit/:id"  component={Edit_Expense_Page} />
           <Route path="/help" component={Help_Page} />
           <Route component={Not_found_page} />
         </Switch>   
     </div>
   </BrowserRouter>
);
export default Approuter;