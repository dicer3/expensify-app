const promise =new Promise((resolve,reject)=>
{  setTimeout(()=>{
    /*resolve({
        name: 'andrew',
        age: 19,
    });*/
   reject('something went wrong!!!!')
},5000);
})
console.log('before');
promise.then((data)=> {
    console.log('1',data);
},(error)=>
{
    console.log('error ',error);
})
// promise.then((data)=> {
//     console.log('2',data);
// })
console.log('after');