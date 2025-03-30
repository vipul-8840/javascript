const obj ={
    name:"vipul",
    age:23,
    print:function ()
    {
         console.log(`my name is : ${this.name} && age is :${this.age}`);
         return "hello"
    }
}

console.log(obj['name']);
console.log(obj.print);