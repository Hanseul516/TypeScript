// Index Signatures

// interface TransactionObj {
//     readonly [index: string]: number
// }

interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj):
    number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

// todaysTransactions.Pizza = 40 //오류

console.log(todaysTransactions['Dave'])

///////////////////////////////////////

interface Student {
    // [Key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    Classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    Classes: [100, 200]
}

// console.log(Student.test)  //test는 undefined라서 가능

for (const Key in student){
    console.log(`${Key}: ${student[Key as Keyof Student]}`)
}

Object.Keys(student).map(Key => {
    console.log(student[Key as Keyof typeof student])
})

const logStudentKey = 
