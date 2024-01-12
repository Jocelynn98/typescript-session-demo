// Any
let x:any;

x = 1;
x = 'foo';
x = true;



let y:any = 'hello';

y(1)
y.foo = 100;



function plus(x, y) {
    return x + y;
}

plus(1, [1, 2, 3]);



var a; // 不报错
let b; // 不报错




// Unknown
let sss:unknown = 123;

let v1:boolean = sss; // 报错
let v2:number = sss; // 报错







// Never
let sir:never;
sir = 'a';




function f():never {
    throw new Error('Error');
}

let q1:number = f(); // 不报错
let q2:string = f(); // 不报错
let q3:boolean = f(); // 不报错
