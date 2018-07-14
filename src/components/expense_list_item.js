import React from 'react';
//import { remove_expense } from '../actions/expenses';
//import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
/*import {connect} from 'react-redux';
const expense_value=(props)=>
(
    <div> 
      {props.expenses.map((my_expense)=><div key={my_expense.description}><p>{my_expense.description}   {my_expense.amount}</p></div>)}
    </div>
);
const using_map=(state2)=>
{
    return{
        expenses:state2.expenses,
    }
};

export default connect(using_map)(expense_value);*/
/*const each_item=(props)=>
(   <div>
      <p >{props.props1.description}</p>
      <p >{props.props1.amount} -> {props.props1.createdate}</p>
    </div>  
);*/

const each_item=({id,description,amount,createdate})=>
(  
    <Link className="list-item" to={`/edit/${id}`}> 
      <div>
         <h3 className="list-item-title">{description}</h3>
        <span className="list-item-subtitle"> {moment(createdate).format('MMMM Do,YYYY')}</span>
     </div>   
       <h3 className="list-item-data"> {numeral(amount/100).format('$0,0.00')} </h3>
    </Link>
);
export default each_item;
//export default connect()(each_item);
//<button onClick={(e)=>props.dispatch(remove_expense({id}))}>remove</button>