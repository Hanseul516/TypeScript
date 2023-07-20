"use strict";
// Generics
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true)); //f
console.log(isObj('John')); //f 문자열이라서
console.log(isObj([1, 2, 3])); //f
console.log(isObj({ name: 'John' })); //t 객체라서
console.log(isObj(null)); //f
const isTrue = (arg) => {
    if ((Array.isArray(arg)) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(true)); // { arg: true, is: true }
console.log(isTrue(false)); // { arg: false, is: false }
const emptyArray = [];
console.log(isTrue(emptyArray)); // { arg: [], is: false }
const emptyObject = {};
console.log(isTrue(emptyObject)); // { arg: {}, is: false }
console.log(isTrue("hello")); // { arg: 'hello', is: true }
const obj = { name: 'John', age: 30 };
console.log(isTrue(obj)); // { arg: { name: 'John', age: 30 }, is: true }
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' }));
// console.log(processUser({name:'Dave'}))
const getUserProperty = (users, key) => {
    return users.map(user => user[key]);
};
//////////////////////////////////////
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12
const myState = new StateObject([15]);
myState.state = (['Dave', 42, true]);
