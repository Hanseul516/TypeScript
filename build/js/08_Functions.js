"use strict";
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Helo!');
logMsg(add(2, 3));
// logMsg(add('a',3)) //number만 가능
let subtract = function (c, d) {
    return c - d;
};
