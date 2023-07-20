"use strict";
// Enums
// Enums는 TypeScript에서 제공하는 기능으로, JavaScript에는 없는 개념입니다. Enums는 JavaScript 런타임에서 동작하며, TypeScript 컴파일러가 Enums를 JavaScript 코드로 변환할 때 일부 동작을 추가합니다.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
// 위 코드는 'Grade'라는 열거형을 정의하고 'U', 'D', 'C', 'B', 'A'라는 멤버를 갖습니다.
// 각 멤버는 순서대로 1, 2, 3, 4, 5의 값을 가집니다.
// 'Grade.U'는 열거형 멤버 'U'의 값을 출력합니다.
// 열거형(enum)은 특정 값들의 집합을 정의하는 TypeScript의 타입입니다.
// 열거형은 숫자 또는 문자열 값을 사용하여 멤버들을 나타내며, 멤버들은 자동으로 증가하는 숫자 또는 수동으로 지정한 값을 가집니다.
// 열거형을 사용하면 코드의 가독성을 높이고 특정 값들을 의미있는 상수로 사용할 수 있습니다.
