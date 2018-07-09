import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

const now=moment();
console.log(now.format('Do MMM YYYY'));
 class Expense_form extends React.Component
 {  constructor(props)
    {
        super(props);

        this.state=
        {
            description:props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            amount:props.expense?(props.expense.amount/100).toString():'',
            create_at:props.expense?moment(props.expense.createdate):moment(),
            calender_focused: false,
            error:''
        }
    }
    on_desc_change=(e)=>
    {
        const description=e.target.value;
        this.setState(()=>({description}));
    }
    on_text_area_change=(e)=>
    {
        e.persist();
        //note=e.target.value;
       this.setState(()=>({note:e.target.value}));
    }
    on_amount_change=(e)=>
    {
        const amount=e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
        this.setState(()=>({amount}));
     }
     on_date_change=(create_at)=>
     {      if(create_at)
               this.setState(()=>({create_at}));
     }
     on_focus_change=({focused})=>
     {
         this.setState(()=>({calender_focused:focused }));
     }
     on_submit=(e)=>
     {
         e.preventDefault();
         if(!this.state.description || !this.state.amount )
         {
             if(!this.state.description)
                this.setState(()=>({error:'enter description'}));
              else
                 this.setState(()=>({error:'enter amount'})); 
         }
         else
               {   console.log('submitted');
                   this.setState(()=>({error:''}));
                   this.props.on_submit(
                       {
                           description:this.state.description,
                           amount: parseFloat(this.state.amount,10)*100,
                           createdate:this.state.create_at.valueOf(),
                           note:this.state.note
                       }
                   )
                
                }
     }
     render(){
        return(
            <div> 
            {this.state.error && <p>{this.state.error}</p>} 
            <form onSubmit={this.on_submit}>
            <input type="text" placeholder="description" autoFocus
            value={this.state.description} onChange={this.on_desc_change} />
            <input type="text" placeholder="amount" value={this.state.amount} onChange={this.on_amount_change} />
            <SingleDatePicker
              date={this.state.create_at}
              onDateChange={this.on_date_change}
              focused={this.state.calender_focused}
              onFocusChange={this.on_focus_change}
              numberOfMonths={1}
              isOutsideRange={()=> false}
              />
            <textarea placeholder="add a note for expense(optional)" value={this.state.note} onChange={this.on_text_area_change}  />
            <button>add expense</button>
                </form>
                
            </div>
        )
     }
 }
 export default Expense_form;