//function print()
//{
    // console.log("hello")
//}
// console.log(typeof print);

// function multipleBy5(num)
// {
//     return num*5;
// }
// multipleBy5.power = 10;
// console.log(multipleBy5(5))
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

// const arr = [1,2,3];
// const obj = {
//     username:"vipul",
//     age:22
// }

// Object.prototype.printMe = function()
// {
//      console.log('printMe function is encountered to all objects');
// }
// Array.prototype.sum=function()
// {
//     console.log('sum function to only array ')
// }
// arr.printMe();
// obj.printMe();
// arr.sum();
// obj.sum()

// const str = "vipul";
// String.prototype.truelength = function()
// {
//     console.log(`${this.str}`)
    
//     console.log(str.length);
// }
// str.truelength()


// const obj1 = {
//     name:"vipul",
//     age:23,
//     printMe:()=>{
//          console.log(`Name is ${this.name} && age is ${this.age}`);
//     }
// }
// obj2={
//     name:"prashant"
// }
// Object.setPrototypeOf(obj2,obj1);
//  obj2.__proto__=obj1;
// console.log(obj2);
// console.log(obj2.age);


          //   ----call -------
// function setUser(username)
// {
//     console.log("call from printMe function")
//      this.username = username;
// }
// function printMe(username,email,password)
// {      setUser.call(this,username);
     
//       this.email = email;
//       this.password = password;
     

// }
// const obj = new printMe("vipul","@gmail.com","1234")
// console.log(obj.username)