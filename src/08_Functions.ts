// Functions

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Helo!')
logMsg(add(2, 3))
// logMsg(add('a',3)) //number만 가능

let subtract = function (c: number, d: number):
    number {
    return c - d
}