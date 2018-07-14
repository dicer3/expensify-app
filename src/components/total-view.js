import get_visible_expenses from '../selectors/expenses';
import expense_total from '../selectors/expenses-total';
import {connect} from 'react-redux';
import React from 'react';
import numeral from 'numeral';
import {Link} from 'react-router-dom'; 
const Expenselist=(props)=>
{    const expense_word=props.expenses.length===1?"expense":"expenses";
     const money=numeral(props.total/100).format('$0.00')
     return(
     <div className="page-header">
         <div className="content-container">
            {<h2 className="page-header-title" >Viewing <span>{props.expenses.length}</span> {expense_word} totalling <span>{money}</span></h2>}    
           <div className="page-header-action">
               <Link className="button_style" to="/create">Add Expense</Link>
           </div>
        </div>
     </div>  
    ); 
};
const map_state_to_props=(state1)=>
{ const expenses= get_visible_expenses(state1.expenses,state1.filters);
    return{
        expenses,
        total: expense_total(expenses),
    }
}; 
const Connected_expense_list=connect(map_state_to_props)(Expenselist);
export default Connected_expense_list;
