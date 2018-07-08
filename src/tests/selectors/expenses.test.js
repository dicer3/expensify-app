import moment from 'moment';
import get_visible_expenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';
 
test('should filter by startdate',()=>
{  const filters={
     text: '',
     sortby: 'date',
     startdate: moment(0),
     enddate: undefined,
    }
    const result=get_visible_expenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]]);
})
test('should filter by enddate',()=>
{
    const filters=
    {
        text: '',
        sortby: 'date',
        startdate: undefined,
        enddate: moment(0).add(2,'days')
    }
    const result=get_visible_expenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[1]]);
})
test('should sort by date',()=>
{
    const filters=
    {
        text: '',
        sortby: 'date',
        startdate: undefined,
        enddate: undefined,
    }
    const result=get_visible_expenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
})
test('should sort by amount',()=>
{
    const filters=
    {
        text: '',
        sortby: 'amount',
        startdate: undefined,
        enddate: undefined,
    }
    const result=get_visible_expenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
})
