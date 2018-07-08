import filter_reducer from '../../reducers/filters';
import moment from 'moment';
test('should setup default filter value',()=>
{
   const state=filter_reducer(undefined,{type:'@INIT'});
   expect(state).toEqual(
       {
           text: '',
            sortby: 'date',
            startdate:moment().startOf('month'),
            enddate:moment().endOf('month'),
       }
   )
})

test('should set sortby to amount',()=>
{
    const state=filter_reducer(undefined,{type: 'sort_to_amount'});
    expect(state.sortby).toBe('amount');
})
test('should set sortby to date',()=>
{
    const current_state={
      text:'',
       startdate: undefined,
       enddate: undefined,
       sortby: 'amount1',
    }
    const action={type: 'sort_to_date'};
    const state=filter_reducer(current_state,action);
    expect(state.sortby).toBe('date');
})
test('should set test filter',()=>
{   const action=
    {
            text:"klehgwlr",
            type: "set",

    }
    const state1=filter_reducer(undefined,action);
    expect(state1.text).toBe(action.text);
})
test('should set startdate filter',()=>
{   const action=
    {
            start_date:moment(0),
            type: "set_start_date",

    }
    const state1=filter_reducer(undefined,action);
    expect(state1.startdate).toBe(action.start_date);
})
test('should set startdate filter',()=>
{   const action=
    {
            end_date:moment(0),
            type: "set_end_date",

    }
    const state1=filter_reducer(undefined,action);
    expect(state1.enddate).toBe(action.end_date);
})