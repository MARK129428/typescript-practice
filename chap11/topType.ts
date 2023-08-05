let a: unknown = 1
let b = (a as number) + 2;           //b的值为3

let c: unknown = [1, 2];
(c as number[]).push(3);             //c的值为[1,2,3]

let d: unknown = { x: "hello" }
console.log((d as { x: string }).x); //输出hello

// unknown类型使用之前必须断言

// let a: unknown = 1
// let b = <number>a + 2;               //b的值为3
//
// let c: unknown = [1, 2];
// (<number[]>c).push(3);               //c的值为[1,2,3]
//
// let d: unknown = { x: "hello" }
// console.log((<{ x: string }>d).x);   //输出"hello"

// let a: unknown = 1
// if (typeof a == "number")
//     console.log(a + 2);  //输出3
//
// if (a === 1)
//     console.log(a + 4);  //输出5
//
// let b: unknown = [1, 2];
// if (b instanceof Array) {
//     b.push(3);
//     console.log(b);      //输出[1,2,3]
// }