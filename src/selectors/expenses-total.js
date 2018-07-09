
const accumalate=(sum,total)=>sum+total;
const get_sum=(expenses)=>
{   return expenses.map((expense)=>expense.amount).reduce(accumalate,0);
//      if(expenses.length===0)
//        return 0;
//      else
//      {   //const expense1=[];
//          /*for(let i=0;i<expenses.length;i++)
//             expense1.push(expenses[i].amount);
//         console.log(expense1);
//           //console.log(expense2);
//            return expense1.reduce(accumalate);*/
//          return expenses.map((expense)=>expense.amount).reduce(accumalate,0);
//    } */
}
export default get_sum;