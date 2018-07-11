import React from 'react';
import {connect} from 'react-redux';
import Expense_form from './expense_form';
import {start_add_expense} from '../actions/expenses';
export class Add_Expense_Page extends React.Component
{
      on_submit=(expense)=>
      {
            this.props.submitted(expense) 
            this.props.history.push('/');
      }

render()
  { 
  return(
    <div>
         <h1>add expense</h1>
         <Expense_form 
         on_submit={this.on_submit}/>
    </div>
      )
  }
}
const map_dispatch_to_props=(dispatch)=>(
      {
       submitted:(expense)=>dispatch(start_add_expense(expense))
      }
)
export default  connect(undefined,map_dispatch_to_props)(Add_Expense_Page);