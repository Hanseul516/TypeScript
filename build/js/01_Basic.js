"use strict";
// chapter2: Basic Types
let myName = 'hanseul'; // 문자열 타입 변수 선언과 초기화
let meaningOfLife; // 숫자 타입 변수 선언
let isLoading; // 불리언 타입 변수 선언
let album; // 모든 타입을 저장할 수 있는 변수 선언
myName = 'Risa'; // 변수에 값 할당
meaningOfLife = 42;
isLoading = true;
album = 2000;
const sum = (a, b) => {
    return a + Number(b); // 인수를 숫자로 변환하여 합산한 값을 반환
};
let postId; // 문자열 또는 숫자 값을 저장할 수 있는 변수 선언
let isActive; // 숫자, 불리언, 문자열 값을 저장할 수 있는 변수 선언
let re = /\w+/g; // 정규 표현식
// - 변수를 선언할 때 타입을 명시하여 해당 변수가 어떤 종류의 값을 가지는지 지정합니다.
// - 값을 할당할 때는 변수에 해당하는 타입과 일치하는 값을 할당합니다.
// - 함수의 매개변수와 반환 값에도 타입을 명시하여 함수의 입력과 출력을 명확히합니다.
// - 유니언 타입을 사용하면 여러 가지 타입 중 하나를 저장할 수 있는 변수를 만들 수 있습니다.
// - 정규 표현식은 패턴에 대응되는 문자열을 찾을 때 사용됩니다.
