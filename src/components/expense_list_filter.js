import React from 'react';
import { connect } from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {set_text_filter,sort_by_date,sort_by_amount,set_start_date,set_end_date} from '../actions/filters';
import 'react-dates/initialize';
class expense_list_filters extends React.Component
{   state=
    {
        calender_focused: null,
    }
    date_change=({startDate,endDate})=>{
        this.props.dispatch(set_start_date(startDate));
        this.props.dispatch(set_end_date(endDate));
    }
    on_focus_change=(calender_focused)=>
    {
       this.setState(()=>({calender_focused}));
    }

   
    render()
    {
    return(
        <div className="content-container">
          <div className="input-group">
            <div className="indiviual-item">
                  <input placeholder="Search Expenses" type="text" className="text-input" value={this.props.filters.text} onChange={(e)=>{this.props.dispatch(set_text_filter(e.target.value))}}/>
            </div>
               <div className="indiviual-item">
                 <select className="select" value={this.props.filters.sortby} onChange={(e)=>{e.target.value==="date"?this.props.dispatch(sort_by_date()):this.props.dispatch(sort_by_amount())}}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                 </select>
               </div> 
            <div className="indiviual-item">
               <DateRangePicker           
               startDate={this.props.filters.startdate}
               endDate={this.props.filters.enddate}
               onDatesChange={this.date_change}
               focusedInput={this.state.calender_focused}
               onFocusChange={this.on_focus_change}
               numberOfMonths={1}
               isOutsideRange={()=>false}
               showClearDates={true}
              />
             </div>
           </div>   
        </div>
        )
    }
} 
/*const expense_list_filters=(props)=>
(
    <div>
       <input type="text" value={props.filters.text} onChange={(e)=>{props.dispatch(set_text_filter(e.target.value))}}/>
     <select value={props.filters.sortby} onChange={(e)=>{e.target.value==="date"?props.dispatch(sort_by_date()):props.dispatch(sort_by_amount())}}>
         <option value="date">Date</option>
         <option value="amount">Amount</option>
    </select>
       </div>
)*/
const map_state_to_props=(state)=>
{
    return{
        filters: state.filters,
    }
}
export default connect(map_state_to_props)(expense_list_filters);