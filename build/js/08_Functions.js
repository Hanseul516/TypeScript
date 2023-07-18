"use strict";
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Helo!'); //Helo!
logMsg(add(2, 3)); //5
// logMsg(add('a',3)) //number만 가능
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2)); //4
