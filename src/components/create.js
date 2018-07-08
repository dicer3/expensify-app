import React from 'react';
import {connect} from 'react-redux';
import Expense_form from './expense_form';
import {add_expense} from '../actions/expenses';
const Add_Expense_Page=(props)=>
(
   <div>
         <h1>add expense</h1>
         <Expense_form 
         on_submit={(expense)=>{
              props.dispatch(add_expense(expense)) 
              props.history.push('/');
         }}   />
   </div>
)
export default  connect()(Add_Expense_Page);