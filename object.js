
// const id = Symbol("1");
// const obj =
// {
//     name:"vipul",
//     "full_name":"kumar",
//     age:"22",
//     [id] :id
// }
// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj.fullname);
// console.log(obj["full_name"]);
// console.log(typeof obj.age )
// console.log( obj[id])

// const obj = new Object ()
// console.log(obj);
// const id = Symbol("1");
// const student = {}
// student[id]=Symbol("1");
// student.name = "vipul";
// student.age = 22;
// student['fullName']= "Kumar";
// console.log(student);

// const human ={
//     name :"vipul",
//     student:{
//         age:22,
//         gender:"M",
//         course:{
//             subj :"Math"
//         }
//     }
// }
// console.log(human);
// console.log(human['student']);
// console.log(human.student.course);
            // ------ Object.assign()-------
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const returnedTarget = Object.assign(target, source);
// console.log(target);
// console.log(returnedTarget);
// console.log(returnedTarget === target);

// const obj1 ={1:"a",2:"b"};
// const obj2 ={3:"c",4:"d"};
// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);
// console.log(obj1);

// const student ={
//     id :'1',
//     name:"vipul",

// }
// console.log(Object.keys(student));
// console.log(Object.values(student));
// const obj ={
//     name:"vipul",
//     age :22,
//     course :"maths"
// }
// const {name,age,course}=obj;
// console.log(name);

console.log(Math.PI);
// Object.prototype.Math.PI = 5;
// console.log(Math.PI);
const obj = Object.getOwnPropertyDescriptor(Math,'PI');
console.log(obj)


