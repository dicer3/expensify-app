import expense_reducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';
test('should set default state',()=>
{
    const state=expense_reducer(undefined,{type: '@@INIT'});
    expect(state).toEqual([]);
})

test('should remove expense by id',()=>
{  const action=
    {
      type: "remove_expense",
      id: expenses[1].id
    };
    const state=expense_reducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
})

test('should not remove if expense by id',()=>
{  const action=
    {
      type: "remove_expense",
      id: '-1'
    };
    const state=expense_reducer(expenses,action);
    expect(state).toEqual(expenses);
})
test('should add expense',()=>
{  const action=
    {
      type: "add_expense",
       expense1:
      {
        id: '4',
        description:'hello',
        note:"about expenses",
        amount:200,
        createdate:moment(0),
      }
    };
    const state=expense_reducer(expenses,action);
    expect(state).toEqual([...expenses,action.expense1]);
})
test('should edit expense by id',()=>
{  const action=
    {
      type: "edit_expense",
      id: expenses[1].id,
      updates:
      {
          amount:2907
      }
    };
    const state=expense_reducer(expenses,action);
    expect(state[1].amount).toBe(action.updates.amount);
})
test('should edit expense without id',()=>
{  const action=
    {
      type: "edit_expense",
      id: -1,
      updates:
      {
          description:"new"
      }
    };
    const state=expense_reducer(expenses,action);
    expect(state).toEqual([...expenses]);
})