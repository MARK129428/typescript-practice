class Person {
    name: string;
    readonly  age: number;

    constructor(name: string, age: number) {
    }

    introduction(): void {
        console.log(`my name is ${this.name}`)
    }
}

class CombineCaculator {
    combine(a: boolean, b: boolean): boolean;
    combine(a: string, b: string): string;
    combine(a: number, b: number): number;
    combine(a: any, b: any): any {
        if (typeof a == "boolean" && typeof b == "boolean") {
            return a || b;
        }
        else {
            return a + b;
        }
    }
}

class Task {
    taskName: string;
    prority: number;
    dueDate: Date;

    constructor(taskName: string);
    constructor(taskName: string, prority: number);
    constructor(taskName: string, dueDate: Date);
    constructor(taskName: string, prorityOrdueDate?: number | Date) {
        this.taskName = taskName;
        if (prorityOrdueDate) {
            if (typeof prorityOrdueDate == "number")
                this.prority = prorityOrdueDate;
            else
                this.dueDate = prorityOrdueDate;
        }
    }
}


class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    };
}
class Administrator extends User {
    authority: string;
    constructor(name: string, authority: string) {
        super(name);
        this.authority = authority;
    };
}

class Person1 {
    _name: string;
    get name() {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
}


interface Checkable {
    check: () => void;
}

interface Clickable {
    click: (x: number, y: number) => void;
}

class Checkbox implements Checkable, Clickable {
    check() {
        console.log("this checkbox has been checked!")
    }
    click(x: number, y: number) {
        console.log(`click location ${x},${y}`)
    }
}

// 静态代码块
class ThreadClass {
    static maxThreadCount: number;
    static {
        if (globalThis.toString() == "[object Window]")
            ThreadClass.maxThreadCount = 1;
        else
            ThreadClass.maxThreadCount = 10;
    }
}

//以下代码在Node.js环境下将输出10，在浏览器环境下将输出1
console.log(ThreadClass.maxThreadCount);

// 简化
class Task1 {
    constructor(
        public taskName: string,
        protected prority: number,
        private infomations: string[],
    ) { }
}