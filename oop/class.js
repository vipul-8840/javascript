// class user{
//      constructor(username,age)
//      {
//           this.username = username;
//           this.age = age;
//      }
//      printMe()
//      {
//         console.log(`My name is ${this.username} && age is ${this.age}`);
//         return "heelo"
//      }
// }

// const obj = new user("vipul",22);
// console.log(obj.printMe());

function user1(username,age)
{
    this.username = username;
    this.age = age;
}
const obj2 = new user1("prashant",23);
user1.prototype.printMe= function()
{
    console.log(`My name is ${this.username} && age is ${this.age}`);
    return "heello"
}
console.log(obj2.printMe());