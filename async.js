// async function print()
// {
//       return "hello world"
   
// }
// const data = print();
// console.log(data);

// const promise = new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         resolve("hello world")
//      },2000);
// })

// async function print()
// {
//     return promise;
// }
// const data = print();
// console.log(data);
// data.then((res)=>console.log(res));

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("hello world")
    },2000);
})
// async function print()
// {
//      const pr = await promise;
//      console.log(pr);

// }
function printData()
{
   promise.then((res)=>{
    console.log(res)
   })
   console.log("handled prmoise ")
}
printData();
// print();
// console.log("vipul");