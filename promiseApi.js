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
// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        //    resolve('hey vipul')
//        reject("thorw errr");

//     },1000);
// })
// const p2 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//          resolve('hii aaina')
//    },2000)
// })
// const p3 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//          resolve('how are you')
//    },3000);
// })
// console.log(new Date().toLocaleTimeString());
// Promise.allSettled([p1,p2,p3])
// .then((val)=>
// { console.log(new Date().toLocaleTimeString());
//    console.log(val);
// })
// .catch((err)=>{
//    console.log(new Date().toLocaleTimeString());
//    console.log(err);
// })
// console.log(new Date().toLocaleTimeString());
// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("first is faster other two promise");
//         reject("errors promise get rejected")
//     },2000);
// })
// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("second is faster other two promise");
//     },3000);
// })
// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("third is faster other two promise");
//     },5000);
// })

// Promise.race([p1,p2,p3])
// .then((res)=>{
//     console.log(new Date().toLocaleTimeString());
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(new Date().toLocaleTimeString());
//     console.log(err);
// })



// })

const p1 = new Promise((resolve,reject)=>{
         setTimeout(()=>{
            //  resolve("first promise get resolved");
             reject("first promise get rejected");
         },1000);
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("second promise get resolved");
        reject("second promise get rejected");
    },1000);
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("third promise get resolved");
        reject("third promise get rejected");
    },1000);
})
console.log(new Date().toLocaleTimeString());
Promise.any([p1,p2,p3])
.then((val)=>{
    console.log(new Date().toLocaleTimeString());
    console.log(val)
})