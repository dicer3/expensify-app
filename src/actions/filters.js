 const set_text_filter=(text="")=>
 (
     {
        type:'set',
        text,
     }
 )
 const sort_by_amount=()=>
(
   {
       type: "sort_to_amount",
   }
)
 const sort_by_date=()=>
(
   {
       type: "sort_to_date",
   }
)
 const set_start_date=(start_date)=>
(
    {
        type: "set_start_date",
        start_date
    }
)
 const set_end_date=(end_date)=>
(
    {
        type: "set_end_date",
        end_date
    }
)
export {set_text_filter,sort_by_amount,sort_by_date,set_start_date,set_end_date};