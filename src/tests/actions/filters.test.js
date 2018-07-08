import moment from 'moment';
import {set_text_filter,sort_by_amount,sort_by_date,set_start_date,set_end_date} from '../../actions/filters';
test('should generate set start date action object',()=>
{
    const action=set_start_date(moment(0));
    expect(action).toEqual(
    {
        type: 'set_start_date',
        start_date: moment(0)
    })
})
test('should generate end start end action object',()=>
{
    const action=set_end_date(moment(0));
    expect(action).toEqual(
     {
         type:"set_end_date",
         end_date: moment(0)
     }
    )
})
test('checking text value',()=>
{
    const action1=set_text_filter('pragun');
    expect(action1).toEqual(
    {
        type:'set',
        text:'pragun',
    }
    )
})
test('checking text value',()=>
{
    const action1=set_text_filter();
    expect(action1).toEqual(
    {
        type:'set',
        text:'',
    }
    )
})
test('checking text value',()=>
{
    const action1=set_text_filter();
    expect(action1).toEqual(
    {
        type:'set',
        text:'',
    }
    )
})
test('checking sort by',()=>
{
    const action=sort_by_date();
    expect(action).toEqual(
        {
            type:'sort_to_date',
        }
    )
})
test('checking sort by',()=>
{
    const action=sort_by_amount();
    expect(action).toEqual(
        {
            type:'sort_to_amount',
        }
    )
})