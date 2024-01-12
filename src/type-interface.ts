// Interface
// 1. Intro
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}
const p:Person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 25
};

interface Foo {
    a: string;
}

type S = Foo['a']; // string

interface Shape {
    name: string;
}




// 2. Inherit
interface Circle extends Shape {
    radius: number;
}

type Country = {
    name: string;
    capital: string;
}

interface CountryWithPop extends Country {
    population: number;
}

class test {
    x:string = '';

    y():boolean {
        return true;
    }
}
interface newTest extends test {
    z: number
}



// 3. extend
interface Box {
    height: number;
    width: number;
}

interface Box {
    length: number;
}

interface Document {
    foo: string;
}

document.foo = 'hello';




// difference with type
type Animal = {
    name: string
}

type Bear = Animal & {
    honey: boolean
}



type aa = { foo:number }; // 报错
type aa = { bar:number }; // 报错



type A = { /* ... */ };
type B = { /* ... */ };

type AorB = A | B;
type AorBWithName = AorB & {
    name: string
};