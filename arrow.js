const user = {
   username:'hitesh',
   price :90,
   welcomeMessage:function()
   {
    console.log(`${this.username},welcome to engineering`)
    console.log(this);
   }
   
}
// user.welcomeMessage();
// user.username = "vipul";
// user.welcomeMessage();
// console.log(this);
// function print()
// {
//     console.log(this);
//     console.log(this.username);
// }
// const print = ()=>{
//     console.log("hello world!");
//     console.log(this);
// }
// print();
// const addTwo = (num1,num2)=>num1 + num2;
// const addTwo = (num1,num2)=>({name:"vipul"});
// const addTwo = (num1,num2)=>{
//     return {name:"vipul"}
// };
// const addTwo = (num1,num2)=>{
//    {name:"vipul"}
// };
// console.log(addTwo(6,4));