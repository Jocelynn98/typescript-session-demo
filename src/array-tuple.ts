 // Arrays:
let numbers: number[] = [1, 2, 3];
let names: Array<string|number> = ["Alice", "Bob", "Charlie"];
// Attempting to add an incompatible type will show a compile-time error
numbers.push("Four"); // Error: Argument of type '"Four"' is not assignable to parameter of type 'number'

// 推断为 any[]
const arr = [];
arr.push(123); // 推断类型为 number[]

arr.push('abc'); // 推断类型为 (string|number)[]

const multi:number[][] = [[1,2,3], [23,24,25]];


// Tuples:
let person: [string, number] = ["John", 30];
// Assigning values of incorrect types will trigger an error
person = [30, "John"]; // Error: Type 'number' is not assignable to type 'string'

