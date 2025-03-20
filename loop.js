// let i = 0;
// while(i<=10)
// {
//     console.log(`the value of the number is : ${i}`);
//     i+=2;
// }
// score = 1;
// do{
//      console.log(`score is ${score}`);
//      score++;
// }while(score<0)
// const arr = [1,2,3,4,5];
// for (const element of arr) {
//     console.log(element);
    
// }
// const greetings  = 'vipul';
// for(const greets of greetings)
// {
//     console.log(greets);
// }

// maps
const map = new Map();
map.set('a',1);
map.set('b',2);
map.set('c',3);
// console.log(map);

// for(const key of map)
// {
//     console.log(key);
// }
// for(const [key,value] of map)
// {
//     console.log(key,':->',value);
// }
const obj ={
    a :"1",
    b:"2",
    c:'3'
}
// for(const key in obj)
// {
//     console.log(key);
// }
for(const key in obj)
{
    console.log(obj[key]);
    // console.log(key);
}
const arr = [1,2,3,4,5];
for(const num of arr)
{
    console.log(num);
}
for(const num in arr )
{
    console.log(num);
}