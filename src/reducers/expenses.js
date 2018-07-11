const expense_default_state=[];
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
                  return {...expense,...action.updates};
              else 
                  return expense;
            })
        }  
        case 'set_expense':
        {
            return action.expenses;
        }  
        default:
             return state;
        }   
}
export default expense_reducer;