
//  firebase.initializeApp(config);
//  const database=firebase.database();
//  database.ref('expenses_123').on('child_changed',(snapshot)=>{
//    console.log(snapshot.key,snapshot.val());
//   })
//  database.ref('expenses_123').on('child_removed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val());
//  });
//  database.ref('expenses_123').on('child_added',(snaphot)=>{
//    console.log(snaphot.key,snaphot.val());

//      database.ref('expenses_123').on('value',
//   (snapshot)=>
// {
//   const expenses=[];
//   snapshot.forEach((childsnapshot)=>{
//      expenses.push({
//        id: childsnapshot.key,
//        ...childsnapshot.val()
//      })
//   })
//   console.log(expenses); 
// })
// database.ref('expenses_123').push(
//     {
//       description: 'long knight',
//       create_at: " today",
//     }
//   )
//     database.ref('expenses_123').once('value').then((snapshot)=>
//   {  const expenses=[];
//       snapshot.forEach((childsnapshot)=>{
//          expenses.push({
//            id: childsnapshot.key,
//            ...childsnapshot.val()
//          })
//       })
//       console.log(expenses);
//   })
//          {
//           description:'expeniced',
//           note:' ',
//           amount: 3200,
//           create_at: '7 years ago', 
//          },
//          {
//           description:'begineer',
//           note:' ',
//           amount: 4100,
//           create_at: '3 months ago', 
//          }
      
//   database.ref('pragun_123').push(
//     {
//       title: 'course content' ,
//         body: 'python react -native',
//     }
//   )
  
//     const notes=[
//       {
//          id: '12',
//          title: 'first note!',
//          body: 'this is my note'
//       },
//       {
//          id: '761ase',
//          title: 'another note!',
//          body: 'this is my note',
//       }
//     ]
  
//   database.ref().on('value',(snapshot)=>{console.log(`${snapshot.val().name} is ${snapshot.val().job.title} at ${snapshot.val().job.company} `)});
  
//   const onvaluechange=database.ref().on('value',(snapshot)=>{console.log(snapshot.val())});
//   setTimeout(()=>{
//      database.ref('age').set(29)
//   },3500);
//   setTimeout(()=>{
//     database.ref().off()
//   },3500);
//   setTimeout(()=>{
//     database.ref('age').set(32)
//   },3500);
//     firebase.initializeApp(config);
//      const database=firebase.database();
//     database.ref('location/city').once('value')
//     .then((snapshot)=>{
//          const val=snapshot.val();
//          console.log(val);
//     }).catch((e)=>{
  
//     })
//     database.ref().set({
//        name: 'pragun',
//        age: 26,
//        job: 'software developer',
//        stresslevel: 6,
//        job: 
//        {
//           title: 'software developer',
//           company: 'Google',
//        },
//        location:
//        {
//          city:'jammu',
//          country: "india"
//        }
  
//   }).then(()=>{
//      console.log('data is saved!!');
//   }).catch((e)=>{
//       console.log('this failed !!!!',e);
//   })
//   database.ref().update (
//     {
//       stresslevel: 9,
//        "job/company" : "amazon",
//        "location/city":"seattle",
//     }
//   ) 
//    database.ref().set(null);                                                                                 
//   database.ref().set('this is my data');
  
//   database.ref('age').set('19');
//   database.ref('location/city').set('new york');
//   database.ref('attributes').set({
//     height: 22,
//     weight: 49,
//   }).then(()=>{
//      console.log('data got saved');
//   }).catch((e)=>{
//        console.log("failed up!!!***",e)
//   });
//   database.ref('attributes/weight').set(49);
//   database.ref().remove().then(()=>
//   {
//     console.log('deleted');
//   }).catch((e)=>
//   {
//     console.log('not got deleted',e);
//   })
  