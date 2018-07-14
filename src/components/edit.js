import React from 'react';
import {connect} from 'react-redux';
import Expense_form from './expense_form';
import {start_edit_expense,start_remove_expense} from '../actions/expenses';
const Edit_Expense_Page=(props)=>
{ 
   return(    
   <div>
        <div className="page-header">
            <div className="content-container">
                <p className="page-header-title">Edit Expense </p>
           </div> 
          </div>
         <div className="content-container">
             <Expense_form 
             expense={props.expenses}
             on_submit={(expense)=>{
             props.dispatch(start_edit_expense(props.expenses.id,expense))
             props.history.push('/')
              }}   />
         </div>
         <div className="content-container">
            <button className="button_secondary" onClick={  (e)=>{
            props.dispatch(start_remove_expense( { id:props.expenses.id /*props.match.params.id*/ }) ) 
            props.history.push('/') } } >Remove Expense</button>
         </div>
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