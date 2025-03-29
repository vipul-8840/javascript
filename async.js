// async function print()
// {
//       return "hello world"
   
// }
// const data = print();
// console.log(data);

const promise = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve("hello world")
     },2000);
})

async function print()
{
    return promise;
}
const data = print();
console.log(data);
data.then((res)=>console.log(res));