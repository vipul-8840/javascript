// setTimeout(()=>console.log(1),0);
// console.log(2);
// Promise.resolve().then(()=>{
//       console.log(3)
// },)
// setTimeout(()=>console.log(4),0);
// console.log(5);

// promise.all()
//  const p1 = new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         //    resolve('hey vipul')
//         reject("thorw errr");

//      },1000);
//  })
//  const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//           resolve('hii aaina')
//     },2000)
// })
// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//           resolve('how are you')
//     },3000);
// })
// console.log(new Date().toLocaleTimeString());
// Promise.all([p1,p2,p3])
// .then((val)=>
// { console.log(new Date().toLocaleTimeString());
//     console.log(val);
// })
// .catch((err)=>{
//     console.log(new Date().toLocaleTimeString());
//     console.log(err);
// })

// promise.allSettled()
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       //    resolve('hey vipul')
       reject("thorw errr");

    },1000);
})
const p2 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
         resolve('hii aaina')
   },2000)
})
const p3 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
         resolve('how are you')
   },3000);
})
console.log(new Date().toLocaleTimeString());
Promise.allSettled([p1,p2,p3])
.then((val)=>
{ console.log(new Date().toLocaleTimeString());
   console.log(val);
})
.catch((err)=>{
   console.log(new Date().toLocaleTimeString());
   console.log(err);
})