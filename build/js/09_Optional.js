"use strict";
// Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2)); //7
logMsg(addAll(2, 3)); //5
logMsg(sumAll(2, 3)); //7
logMsg(sumAll(undefined, 3)); //15
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3)); //15
const creatError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return creatError('This should never happen!');
};
