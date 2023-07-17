// Objects

let myObj: object;  // object 타입 변수 선언
myObj = [];  // 배열을 할당하여 myObj에 저장
console.log(typeof myObj);  // myObj의 타입 출력 (object)

myObj = bands;  // bands 배열을 할당하여 myObj에 저장
myObj = {};  // 빈 객체를 할당하여 myObj에 저장

const exampleObj = {
    prop1: 'Dave',
    prop2: true
};  // 객체 리터럴 선언과 초기화

exampleObj.prop1 = 'John';  // 객체 속성 값 수정

type Guitarist = {  // interface Guitarist {}
    name?: string,  // 선택적 속성
    active: boolean,
    albums: (string | number)[]
};  // 객체 타입 정의

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1988, 5150, 'OU812']
};  // Guitarist 타입의 객체 선언과 초기화

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};  // Guitarist 타입의 객체 선언과 초기화

const greetGuitarist = (guitarist: Guitarist) => { //Guitarist 타입의 guitarist 매개변수를 받음
    if (guitarist.name) { //guitarist 객체에 name 속성이 존재하는지 확인
        return `Hello ${guitarist.name?.toUpperCase()}!`; //guitarist 객체에 name 속성이 존재할 경우, 해당 이름을 대문자로 변환한 후, Hello [이름]! 형식의 문자열을 반환. 여기서 ?.는 옵셔널 체이닝 연산자로, guitarist.name이 undefined 또는 null인 경우를 대비하여 안전하게 접근.
    }
    return 'Hello!'
}; 

console.log(greetGuitarist(jp));  // jp 객체를 인자로 전달하여 함수 호출


// - 객체는 여러 개의 속성으로 구성된 자료구조입니다.
// - 객체는 중괄호 {} 안에 속성과 해당 속성의 값으로 정의됩니다.
// - 객체의 속성은 특정 타입의 값이 할당될 수 있으며, 속성의 값을 수정할 수 있습니다.
// - 객체 타입은 속성의 타입과 선택적인 속성을 정의할 수 있습니다.
// - 객체는 타입을 명시하여 변수를 선언하고, 해당 타입의 객체를 할당하여 사용할 수 있습니다.
// - 함수의 매개변수로 객체 타입을 사용하여 객체를 전달할 수 있습니다.

