// Generics
function getFirst<T>(arr:T[]):T {
    return arr[0];
}
getFirst<number>([1, 2, 3])



function map<T, U>(arr:T[], f:(arg:T) => U):U[] {
    return arr.map(f);
}
map<string, number>(['1', '2', '3'], (n) => parseInt(n)); // 返回 [1, 2, 3]





// 2.1 函数的泛型写法
function id<T>(arg:T):T {
    return arg;
}
// 2.2 接口的泛型写法
interface Boxx<T> {
    contents: T;
}

const boxx:Boxx<string> = {
    contents: 'boxx',
};
//2.3 类的泛型写法
class Pair<K, V> {
    key: K;
    value: V;
}
//2.4 类型别名的泛型写法
type Container<T> = { value: T };

const e: Container<number> = { value: 0 };
const h: Container<string> = { value: 'b' };





//3. 类型参数的默认值
function getFirstOne<T = string>(arr:T[]):T {
    return arr[0];
}




//4.数组的泛型表示
let testArr:Array<number> = [1, 2, 3];


//5. summary
function greet1<Str extends string>(s:Str) {
    console.log('Hello, ' + s);
}

function greet2(s:string) {
    console.log('Hello, ' + s);
}
