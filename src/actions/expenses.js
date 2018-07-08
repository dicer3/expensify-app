
import uuid from 'uuid';
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
  export {add_expense,edit_expense,remove_expense};