const add=(a,b)=>a+b;
const generate_greeting=(name='anonymus')=> `Hello ${name}!`;
test('should add two numbers',()=>{
    const result=add(3,4)
    if(result !==7)
    {
        throw new Error(`you added 4 and 3 .the result was ${result}. expected 7`);
       
    }
    expect(result).toBe(7);
});

test('return',()=>
{
    const result1=generate_greeting('pragun');
    expect(result1).toBe(`Hello pragun!`);
})
test('should genreate greeting for name',()=>{
    const result2=generate_greeting();
    expect(result2).toBe(`Hello anonymus!`);
})