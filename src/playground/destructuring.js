//object destructing
const person=
{
    //name: 'pragun',
    age: 26,
    location:
    {
        city: 'jammu',
        temp: 33,
    }
};
const {age,kk}=person
console.log(age,kk);
/*const {age,name:first_name='anonynmous'}= person
console.log(`${first_name} is ${age}`);
const {temp :temperature,city}=person.location;
if(city && temperature)
{
console.log(`it is ${temperature} is ${city} `);
}
/*
 for default name='' 
  for using another varaible=' '
  */
 /*const book=
 {
     title: 'ego is the enemy',
     author: 'ryan holiday',
     publisher:
     {
         name: 'pengiun'
     }
 };

 const {name:publisherName='self published'}=book.publisher;
 console.log(publisherName);
 */
//array destructing

// const address=['1299 s jun iper state','philadelphia','pennsylvania','19147'];
// const [,city,state="newyork",]=address;
// console.log(`you are now in ${city} ${state}`);
// const item=['coffee(hot)1','$2.00','$2.510','$2.75'];
// const[ coffee,,cost,]=item;
// console.log(`a medium ${coffee} costs ${cost} `);
