"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge()); // Hello, I'm 42
// console.log(Dave.age)   //내부에서 접근가능(외부x)
// console.log(Dave.lang)  //하위에서만 접근가능(외부x)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age); //super: 부모 클래스의 생성자를 호출
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`; // protected 하위클래스라서 가능
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
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
const Jo;
