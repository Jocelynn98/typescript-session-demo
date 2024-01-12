// Function Types:
// 1. Function Declaration:
function hello(txt:string): void {
    console.log('hello ' + txt);
}
function add(x: number, y: number): number {
    return x + y;
}
let result: number = add(3, 5);



//2. Function Types:
function doSomething(f:Function) {
    return f(1, 2, 3);
}



//3. Arrow Functions:
function greet(fn:(a:string) => void):void {
    fn('world');
}
type Person1 = { name: string };

const people = ['alice', 'bob', 'jan'].map(
    (name):Person1 => ({name})
);




// 4. Optional Parameters:
function greeting(name: string, message?: string): void {
    if (message) {
        console.log(`Hello, ${name}! ${message}`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}
greeting("Alice"); // Output: Hello, Alice!
greeting("Bob", "Have a nice day!"); // Output: Hello, Bob! Have a nice day!


let myFunc1:
    (a?:number, b:number) => number;
let myFunc2:
    (a:number|undefined, b:number) => number;



// 5. Default Parameters:
function greetDefault(name: string, message: string = "Welcome!"): void {
    console.log(`Hello, ${name}! ${message}`);
}
greetDefault("Charlie"); // Output: Hello, Charlie! Welcome!
greetDefault("David", "Goodbye!"); // Output: Hello, David! Goodbye!




//6. higher order function
const high = (someValue: number) => (multiplier: number) => someValue * multiplier;
high(1);


//7. function overload
function reverse(str:string):string;
function reverse(arr:any[]):any[];
function reverse(
    stringOrArray:string|any[]
):string|any[] {
    if (typeof stringOrArray === 'string')
        return stringOrArray.split('').reverse().join('');
    else
        return stringOrArray.slice().reverse();
}


// 报错
function fn(x:boolean):void;
function fn(x:string):void;
function fn(x:number|string) {
    console.log(x);
}



function overload(x:any):number;
function overload(x:string): 0|1;
function overload(x:any):any {
    // ...
}

const o:0|1 = overload('hi'); // 报错


