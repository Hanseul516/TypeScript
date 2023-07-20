// Functions

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Helo!') //Helo!
logMsg(add(2, 3)) //5
// logMsg(add('a',3)) //number만 가능

let subtract = function (c: number, d: number):
    number {
    return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2)) //4