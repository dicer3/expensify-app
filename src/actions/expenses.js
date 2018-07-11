import database from '../firebase/firebase';
import uuid from 'uuid';
 const add_expense=(expense1)=>
  (
      {
          type:"add_expense",
          expense1
      }
  )
  export const start_add_expense=(expensedata={})=>
  {
      return(dispatch)=>
      {
          const{
            description='',
            note='',
            amount=0,
            createdate=0
          }=expensedata;
          const expense={description,note,amount,createdate}
          database.ref('expense').push(expense).then((ref)=>
        {
            dispatch(add_expense(
              {  id: ref.key,
                ...expense}
            ))
        })
      }
  }
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
  export {add_expense,edit_expense,remove_expense};