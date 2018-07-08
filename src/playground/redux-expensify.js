import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';
//import { ssh } from 'node-forge';
//import { connect } from 'net';
console.log('hello');
const add_expense=(
  {
      description='',
      note='',
      amount=0,
      createdate=0
  }
  ={}
)=>
(
    {
        type:"add_expense",
        expense1:
        {
            id: uuid(),
            description,
            note,
            amount,
            createdate
        }
    }
)
const edit_expense=(id,updates)=>
(
      {
       type: 'edit_expense',
       id,
       updates,
      }   
)
 const remove_expense=({ id}={} )=>
 (
     {
       type:"remove_expense",
       id,
     }
 ) 
 const set_text_filter=(text=" ")=>
 (
     {
        type:'set',
        text,
     }
 )
const sort_by_amount=()=>
(
   {
       type: "sort_to_amount",
   }
)
const sort_by_date=()=>
(
   {
       type: "sort_to_date",
   }
)
const set_start_date=(start_date)=>
(
    {
        type: "set_start_date",
        start_date
    }
)
const set_end_date=(end_date)=>
(
    {
        type: "set_end_date",
        end_date
    }
)
const expense_default_state=[];
const filter_default_state={
    text:"",
    sortby:"date",
    startdate: undefined,
    enddate: undefined,
}
const expense_reducer=(state=expense_default_state,action)=>
{   
    switch(action.type)
    {   case "add_expense":
           { //console.log('hello'),
             //console.log(action.expense1);
             return [...state,action.expense1];
           }
         case "remove_expense":
         {
            return state.filter((state)=> state.id!==action.id);
         }
         case 'edit_expense':
         {
             return state.map((expense)=>
             {
              if(expense.id===action.id)
              {
                 return {...expense,...action.updates};
              }
              else 
                 return expense;
            })
        }    
        default:
             return state;
        }   
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
const get_visible_expenses=(expenses,{text,sortby,startdate,enddate})=>
{   console.log("hi",expenses);
   return expenses.filter((expense)=>
   {   //expense.description=expense.description.toLowerCase();
       const start_date_match=typeof startdate !== 'number' || expense.createdate >=startdate;
       const end_date_match=typeof enddate !== 'number' || expense.createdate <=enddate;
       const text_match= expense.description.toLowerCase().includes(text);
       return start_date_match && end_date_match && text_match;
   }).sort((a,b)=>{
       if(sortby==='date')
        {  
            return a.createdate<b.createdate?1:-1;
        }
        else if(sortby==="amount")
        {  // console.log("second case");
            return a.amount<b.amount?1:-1;
      }

   });
}
 const store=createStore(
     combineReducers({
         expenses: expense_reducer,
         filters: filter_reducer
     })
 );
store.subscribe(()=>
 {  const state=store.getState();
    const visible_expenses=get_visible_expenses(state.expenses,state.filters);
    console.log(visible_expenses);
    console.log("full",store.getState());

    //console.log(state.expenses);
 })
  const expense_one=store.dispatch(add_expense({description: 'rent', amount: 100,createdate:21000}));
const expense_two=store.dispatch(add_expense({description: 'coffee', amount: 300,createdate:-1000}));
 store.dispatch(remove_expense({id: expense_one.expense1.id }))
 store.dispatch(edit_expense(expense_two.expense1.id,{amount: 500}))
  //store.dispatch(set_text_filter('rent'));
  //store.dispatch(set_text_filter('coffe'));
//  store.dispatch(set_text_filter());
  store.dispatch(sort_by_amount());//amount
//  store.dispatch(sort_by_date());///date
//store.dispatch(set_start_date(0));
//  store.dispatch(set_start_date());

 //store.dispatch(set_end_date(999));
const demoState={
     expenses:[{
         id: '01014',
         description: 'jan rent',
         note: 'this was the final payment for that aaddress',
         amount: 54500,
         createdate: 0,
     }],
     filters:{
         text: 'rent',
         sortby: 'amount',
         startdate: undefined,
         enddate: undefined,
     }
 };
 const user=
 {
     name: 'jen',
     age: 24,
 }
 console.log
 (
     {...user,location:"philidelphia",age:27}
 );