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
// function printData()
// {
//    promise.then((res)=>{
//     console.log(res)
//    })
//    console.log("handled prmoise ")
// }
// printData();
// print();
// console.log("vipul");

const pr1 = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve("hello vipul")
     },10000)
});
const pr2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("hey aaina")
    },5000 )
});

(async function handlePromise()
{
    let date = new Date();
    console.log(date.toLocaleTimeString());

    const val1 = await pr1;
    console.log(val1);
    console.log(new Date().toLocaleTimeString());
    const val2 = await pr2;

    console.log(val2)
    console.log(new Date().toLocaleTimeString())
})();