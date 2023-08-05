let isSuccess: boolean = true;
let isError: boolean = false;

let totalPrice: number = 123;

let hexNumber: number = 0b1011;

// @ts-ignore
let longNum: bigint = 1131291932913991293912939129391293921n;

let text: string = "hello world";

enum MonthOfYear {
    January = 1,
    Februarry,
    March,
    April,
    May,
}

enum UserType {
    Admin,
    VIP,
    Normal,
    Guest
}
const userType: UserType = UserType.Admin
if (userType == UserType.Admin) {

} else if (userType == UserType.VIP) {

}

enum Answer {
    no = 0
}

enum Answer {
    yes = 1
}

let a1: Answer = Answer.yes
let a2: Answer = Answer.no


enum MyAnswer {
    no,
    yes
}

let inputString: string = "yes"
let userAnswer: Answer = Answer[inputString];
console.log(userAnswer);


// 无法通过索引找到相应的值
const enum MyAnswer2 {
    no,
    yes,
}

let syml: Symbol = Symbol();


// 数组与元组
let arr1: string[] = ['a', 'b', 'c'];

let arr2: Array<string> = ['1', '2', '3'];

let arr3: readonly string[] = ['1'];

let tup: [number, string] = [0, '2'];

let tup1: [number, number, string?, number?] = [100, 100];

let tup2: [number, string?, ...number[]] = [1, '2', 1,1,1,1,];

// 函数重载
function combine(a: boolean, b: boolean): boolean
function combine(a: string, b: string): string
function combine(a: number, b: number): number
function combine(a: any, b: any): any {
    if (typeof a == "boolean" && typeof b == "boolean") {
        return a || b;
    } else {
        return a + b;
    }
}

let val1 = combine(1, 2)
let val2 = combine("1", "2");

let combine2: {
    (a: string, b: boolean): boolean
    (a: string, b: string): string
    (a: number, b: number): number
}

combine2 =
    function (a: any, b: any): any {
        if (typeof a == "boolean" && typeof b == "boolean") {
            return a || b
        } else {
            return a + b
        }
    }
    let val3 = combine2('1', '2')

// 约束this
function sum(this: { num1: number }, num2) {
    return this.num1 + num2;
}

let sumCalculator = { num1: 1, selfIntroduction: sum };
let result = sumCalculator.selfIntroduction(2); //result值为3

// 限制使用this
function sum1(this: void, num2) {
    //编译错误：类型"void"上不存在属性"num1"。ts(2339)
    // return this.num1 + num2;
}

// 类型别名声明对象
type Person = {
    firstName: string,
    lastName: string,
}

function introduction(person: Person) {
    console.log(`My name is ${person.firstName} ${person.lastName}`);
}

// 接口声明对象
interface Person2 {
    firstname: string,
    lastName: string,
}

// 可选

interface interface2 {
    a: null,
    b?: number
}

// 只读
interface interface3 {
    readonly num1: number,
    readonly num2: number,
}

// 索引签名
interface mapInterface {
    name: string,
    [index: string]: any
}

// 接口合并的方式， 继承， 交叉类型，声明合并

//继承
interface interface4 extends mapInterface {

}

// 交叉类型
type interface5 = interface2 & mapInterface