import React from 'react';
import Expense_values from './expense_list_item';
import {connect} from 'react-redux';
import get_visible_expenses from '../selectors/expenses';
const Expenselist=(props)=>
(
      <div>
           <h1>expense list</h1>
            {props.expenses.map((expenses)=> {return <Expense_values key={expenses.id} {...expenses} />})}
      </div>
);
const map_state_to_props=(state1)=>
{
    return{
        expenses: get_visible_expenses(state1.expenses,state1.filters),
    };
}; 
const Connected_expense_list=connect(map_state_to_props)(Expenselist);
export default Connected_expense_list;


//{props.expenses.map((expenses)=> {return <Expense_values key={expenses.description} props1={expenses} />})}