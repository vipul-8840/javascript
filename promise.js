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

// const promiseTwo = new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//            console.log("hello world");
//            resolve({
//                  name:"vipul",
//                  age:22
//            })
//        },2000);
// })
// console.log("promise is running");
// promiseTwo.then((userData)=>{
//     console.log(userData)
// });

  // const promiseThree = new Promise((resolve,reject)=>{
  //               setTimeout(()=>{
  //                     let err = false;
  //                     if(!err)
  //                     {
  //                       resolve({
  //                           name:"vipul",
  //                           age:22
  //                       })
  //                     }
  //                     else{
  //                       reject("Error:You are doing something wrong");
  //                     }
  //               },2000);
  // })

  // const res = promiseThree
  //             .then((userData)=>{
  //                  console.log(userData);
  //                  return userData['name'];
  //             })
  //             .then((userName)=>{
  //                console.log(userName);
  //             })
  //             .catch((err)=>{
  //                  console.log(err);
  //             }).finally(()=>{
  //                console.log("the promise is either be rejected or fulfilled");
  //             })
  //             console.log(res);


  // const promise = new Promise((resolve,reject)=>
  //     {
  //             setTimeout(()=>{
  //               console.log("vipul world");
  //               resolve();
  //         },1000
  //       )
               
  //     }
  // );
  // setTimeout(()=>{
  //       console.log("hello world");
  // },1000)



  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("vipul world");
      resolve();  // Now, the Promise is resolved after 1 second
    }, 1000);
  });
  
  promise.then(() => {
    console.log("Promise resolved!");  // This will run AFTER "vipul world"
  });
  
  setTimeout(() => {
    console.log("hello world");
  }, 1*1000);
  