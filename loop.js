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
// for(const key in obj)
// {
//     console.log(obj[key]);
//     // console.log(key);
// }
// const arr = [1,2,3,4,5];
// for(const num of arr)
// {
//     console.log(num);
// }
// for(const num in arr )
// {
//     console.log(num);
// }

// for each loop 
// const arr = [1,2,3,4,5];
// arr.forEach((item)=>{
//     console.log(`number is ${item}`);
// })

// function printMe(item)
// {
//     console.log(item);
// }
// arr.forEach(printMe);

// const arr = [
//     {
//         name:"vipul",
//         age : 23
//     },
//     {
//         name:"prashant",
//         age :24
//     },
//     {
//         name:"abhi",
//         age:24
//     }
// ]

// arr.forEach((item)=>{
//     console.log(item["name"]);
// })

// const nums = [1,2,3,4,5,6,7,8];
// const arr = nums.filter((num)=>num>4);
// const arr = nums.filter((nums)=>{
//     return nums>4;
// })
// console.log(arr);
// console.log(nums);
// const arr =  [1,2,2,3,3,4,4];
// let xors =0;
// for(let i=0;i<arr.length;i++)
// {
//     xors^=arr[i];

// }
// console.log(xors);
        //   ...map...

// const arr = [1,2,3];

// const value = arr.map((num)=>num+10);
// console.log(value);
         //---------Reducer-----
         const arr = [1,2,3];
        //  const values=arr.reduce(function(acc,curr){
        //     console.log(`acc is ${acc} & currVal is ${curr}`);
        //     return acc+curr;

        //  },5);
        //  console.log(values);
        const val = arr.reduce((acc,curr)=>acc +curr,5);
        console.log(val);