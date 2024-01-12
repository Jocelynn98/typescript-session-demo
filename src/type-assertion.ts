// ts的类型断言
type Test = 'a'|'b'|'c';
let fiz = 'a';

let barr:Test = fiz; // 报错




type T = 'a'|'b'|'c';

let cat = 'a';
let dog:T = cat as T; // 正确




const n = 1;
const m:string = n as string; // 报错



