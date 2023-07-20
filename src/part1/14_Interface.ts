
interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist_ implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist_('Jimmy', 'guitar')
console.log(Page.play('strums'))

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Amy.id) //3
console.log(Steve.id) //2
console.log(John.id) //1
console.log(Peeps.count) //3


class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] { //get
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data) //['Neil Young', 'Led Zep']
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data) //['Neil Young', 'Led Zep', 'ZZ Top']
// MyBands.data = ['Van Halen', 5150] //에러, 문자열만 가능