setTimeout(()=>console.log(1),0);
console.log(2);
Promise.resolve().then(()=>{
      console.log(3)
},)
setTimeout(()=>console.log(4),0);
console.log(5);