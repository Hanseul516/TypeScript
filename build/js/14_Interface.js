"use strict";
class Guitarist_ {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist_('Jimmy', 'guitar');
console.log(Page.play('strums'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Amy.id); //3
console.log(Steve.id); //2
console.log(John.id); //1
console.log(Peeps.count); //3
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data); //['Neil Young', 'Led Zep']
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data); //['Neil Young', 'Led Zep', 'ZZ Top']
// MyBands.data = ['Van Halen', 5150] //에러, 문자열만 가능
