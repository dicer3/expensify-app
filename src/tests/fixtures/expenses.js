import moment from 'moment';
const expenses=
[{
    id: '1',
    description: 'gum',
    notes: '',
    amount: 195,
    createdate: 0
 },
  {
  id: '2',
  description: 'rent',
  notes: '',
  amount: 109500,
  createdate: moment(0).subtract(4,'days').valueOf()
  },
 {
     id: '3',
     description: 'credit card',
     note: '',
     amount: 4500,
     createdate: moment(0).add(4,'days').valueOf()
 }
]
   
export default expenses;  