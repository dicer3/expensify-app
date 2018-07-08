import moment from 'moment';
const get_visible_expenses=(expenses,{text,sortby,startdate,enddate})=>
{   text=text.toLowerCase();
   return expenses.filter((expense)=>
   {   //expense.description=expense.description.toLowerCase();
       console.log(expense.createdate);
       const createAt1=moment(expense.createdate);
       const start_date_match= startdate ? startdate.isSameOrBefore(createAt1,'day'):true;
       const end_date_match=enddate? enddate.isSameOrAfter(createAt1,'day'):true;
       const text_match= expense.description.toLowerCase().includes(text);
       return start_date_match && end_date_match && text_match;
   }).sort((a,b)=>{
       if(sortby==='date')
        {  
            return a.createdate<b.createdate?1:-1;
        }
        else if(sortby==="amount")
        {  // console.log("second case");
            return a.amount<b.amount?1:-1;
      }

   });
}
export default get_visible_expenses;