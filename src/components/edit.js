import React from 'react';
import {connect} from 'react-redux';
import Expense_form from './expense_form';
import {edit_expense,start_remove_expense} from '../actions/expenses';
const Edit_Expense_Page=(props)=>
{ 
   return(    
   <div>
         editing the expense with the id of {props.match.params.id};
         <Expense_form 
         expense={props.expenses}
         on_submit={(expense)=>{
             props.dispatch(edit_expense(props.expenses.id,expense))
             props.history.push('/')
         }}   />
         <button onClick={  (e)=>{
       props.dispatch(start_remove_expense( { id:props.expenses.id /*props.match.params.id*/ }) ) 
         props.history.push('/') } } >remove</button>         
   </div>
   )
}

const map_state_Page=(state,props)=>
{
      return{
            expenses: state.expenses.find((expense)=> expense.id===props.match.params.id)
      };

};
export default connect(map_state_Page)(Edit_Expense_Page);