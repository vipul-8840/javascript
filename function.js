// function findUnique(arr)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         let flag = 0;
//         for(let j=0;j<arr.length;j++)
//         {
//             if(i!=j && arr[j]==arr[i])
//             {    flag = 1;
//                 break;
//             }

//         }
//         if(flag==0)
//         {
//             console.log(arr[i]);
//             break;
//         }
//     }
// }
// const arr = [1,2,2,4,3,3,4,1,9];
// findUnique(arr);

// function sum(a,b)
// {
//    let c = a+b;
//    console.log(c);
//    return c;
//}
// const res = sum(8,8);
// console.log (res);
// console.log(c);
// function print (name="vipul")
// {
//     return `usrname is : ${name}`;
// }
// console.log(print());
// console.log(print("prashant"));

// function print (...nums)
// {
//     return nums;
// }
// console.log(print(1,2,3,4,5));

function print(val1,val2,...nums)
{
    return nums;
}
console.log(print(1,2,3,3,4));
