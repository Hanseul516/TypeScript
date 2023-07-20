class Coder {

    secondLang!: string

    constructor(
        public readonly name: string,
        readonly music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

const Dave = new Coder('Dave', 'Rock', 42)
console.log(Dave.getAge()) // Hello, I'm 42
// console.log(Dave.age)   //내부에서 접근가능(외부x)
// console.log(Dave.lang)  //하위에서만 접근가능(외부x)

class WebDev extends Coder { // extends: 클래스 상속
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age) //super: 부모 클래스의 생성자를 호출
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}` // protected 하위클래스라서 가능
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)
console.log(Sara.getLang())
// console.log(Sara.age) //private 외부접근불가
// console.log(Sara.lang) //protected 외부접근불가
