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
      return(dispatch,get_state)=>
      {   const uid =get_state().auth.uid;
          const{
            description='',
            note='',
            amount=0,
            createdate=0
          }=expensedata;
          const expense={description,note,amount,createdate}
          database.ref(`users/${uid}/expense`).push(expense).then((ref)=>
        {  console.log('hello123');
            dispatch(add_expense(
              {  id: ref.key,
                ...expense})
            )
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
  const start_edit_expense=(id,updates)=>
  {  return(dispatch,getstate)=>
    { const id1=getstate().auth.uid;      
      database.ref(`users/${id1}/expense/${id}`).update(
          updates
      ).then(()=>
      {
        console.log('uppdated');
       dispatch(edit_expense(id,updates));
     })
    }  
  }
  const remove_expense=({ id}={} )=>
  (
      {
        type:"remove_expense",
        id,
      }
  )
  const start_remove_expense=({id}={})=>
  {
     return(dispatch,getstate)=>
     {  const id1=getstate().auth.uid;
         database.ref(`users/${id1}/expense/${id}`).set(null).then(()=>
         {
             console.log('got removed',id);
             dispatch(remove_expense({id}))  
         })
     }
  }
  export const set_expenses=(expenses)=>
  (
      {
          type: 'set_expense',
          expenses
      }
  )
 const start_set_expense=()=>
  {
      return(dispatch,getstate)=>
      { const expenses2=[];
        const id1=getstate().auth.uid
       return  database.ref(`users/${id1}/expense`).once('value').then((snapshot)=>
    {
        const expenses2=[];
        snapshot.forEach((child_snapshot)=>
    {  console.log(child_snapshot.key)
        expenses2.push(
       { id:child_snapshot.key,
        ...child_snapshot.val()})
    })
    dispatch(set_expenses(expenses2));       
     })
    
      }
  }
  export {add_expense,edit_expense,start_edit_expense,remove_expense,start_set_expense,start_remove_expense};
