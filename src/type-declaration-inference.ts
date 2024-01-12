// Type Declarations:
let myNumber: number = 10;
const myString: string = "Hello, TypeScript!";
let isActive: boolean = true;
// Trying to assign a different type will result in a compile-time error
// myNumber = "Oops!"; // Error: Type '"Oops!"' is not assignable to type 'number'


// Type inference：
let foo = 123;
foo = 'hello'; // error