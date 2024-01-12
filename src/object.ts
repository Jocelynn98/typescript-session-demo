
// Object
type MyObj1 = {
    x:number;
    y:number;
};
type MyObj2 = {
    x:number,
    y:number,
};
type User1 = {
    firstName: string;
    lastName?: string;
};
type User2 = {
    firstName: string;
    lastName?: string|undefined;
};