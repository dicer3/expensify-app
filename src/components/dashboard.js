import React from 'react';
import Expenselist from './expense_list';
import Expense_list_filters from './expense_list_filter';
import Total_view from './total-view';
const Expense_Dashboard_Page=()=>
(
   <div>
         <Total_view />
         <Expense_list_filters />
         <Expenselist/>
         
   </div>
)
export default Expense_Dashboard_Page;