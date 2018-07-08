import moment from 'moment';
const filter_default_state={
    text:"",
    sortby:"date",
    startdate: moment().startOf('month'),
    enddate:  moment().endOf('month'),
}
const filter_reducer=(state=filter_default_state,action)=>
{
    switch(action.type)
    {  case 'set':
           return {...state,text:action.text};
        case 'sort_to_amount':
            return{...state,sortby:"amount"}
        case 'sort_to_date':
            return{...state,sortby:"date"}
        case 'set_start_date':
            return{...state,startdate:action.start_date}  
        case 'set_end_date':
            return{...state,enddate:action.end_date}              
        default:
           return state;   
    }
}
export default filter_reducer;