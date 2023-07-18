// Optional parameters

const addAll = (a: number, b: number, c?: number):
    number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

// Default param value
const sumAll = (a: number = 10, b: number, c: number = 2):
    number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2)) //7
logMsg(addAll(2, 3)) //5
logMsg(sumAll(2, 3)) //7
logMsg(sumAll(undefined, 3)) //15

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3)) //15

const creatError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}

const numberOrString = (value: number | string):
    string => {
    if (typeof value === 'string') return 'string'
    if (typeof value === 'number') return 'number'
    return creatError('This should never happen!')
}