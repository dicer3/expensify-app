console.log('redux basics');
import {createStore} from 'redux';
const incrementcount=({increment_by=1}={})=>({
       type: 'increment',
       increment: increment_by,
});
const decrementcount=({decrement_by=1}={})=>({
   type: 'decrement',
   decrement: decrement_by,
});
const reset=()=>( { type:'reset', } )
const set=({value}={})=>
({
    type: 'set',
    value,   
})
const store=createStore((state={count: 0},action)=>
{  
    switch (action.type)
    {  case 'increment':
        {
            return{
               count: state.count+action.increment,
                }
        }      
         case 'decrement':
         { 
              return{
                  count: state.count-action.decrement,
              }
         }    
          case 'reset':
               return{
                   count: 0
             
           }
           case 'set':
           {
               return{
                  count: action.value,
               }
           }
          default:
              return state;
    }  
});
const unsuscribe1=store.subscribe(()=>
{
    console.log(store.getState());
})
store.dispatch(incrementcount({increment_by:5}));
store.dispatch(incrementcount());
store.dispatch(reset());
store.dispatch(decrementcount());
store.dispatch(decrementcount({decrement_by:7}));
store.dispatch(set({value:103}));
