import {add_expense,edit_expense,remove_expense} from '../../actions/expenses';

test('should setup remove expense action object ',()=>
{
    const action=remove_expense({id: '123abc'})
    expect(action).toEqual(
        {
            type: 'remove_expense',
            id: "123abc"
        }
    )
})

test('checking edit expense page',()=>
{
    const action1=edit_expense('123abc',{note: 'new note value'})
    expect(action1).toEqual(
        {   type: 'edit_expense',
            id:'123abc',
            updates:{note: 'new note value'}
        }
    )
  
})

test('should setup add expense action object with provided values',()=>
{
     const expense_data=
     {
         description: 'rent',
         amount: 109500,
         createdate: 1000,
         note: 'this was last months rent'
     }
     const action=add_expense(expense_data);
     expect(action).toEqual(
         {
             type: 'add_expense',
             expense1:
             {
                 ...expense_data,
                 id: expect.any(String)
             }
         }
     )
});
test('should setup add expense action object with default values',()=>
{
    const action=add_expense();
    expect(action).toEqual(
    {    type: 'add_expense',
        expense1:
        {
            description:'',
            note:'',
            amount:0,
            createdate:0,
            id: expect.any(String)
        }
    
    })
})