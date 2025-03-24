// const promiseOne = new Promise((resolve ,reject)=>{
//             setTimeout(() => {
//                  console.log("hello world!")
//                  resolve();
//             }, 3000);
// });
// console.log("vipul");
// promiseOne.then(()=>{
//     console.log("promise get resolved ");
// })
// console.log("hey failure");

const promiseTwo = new Promise((resolve,reject)=>{
       setTimeout(()=>{
           console.log("hello world");
           resolve({
                 name:"vipul",
                 age:22
           })
       },2000);
})
console.log("promise is running");
promiseTwo.then((userData)=>{
    console.log(userData)
});