"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
const requiredAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// Record
// Record<K, V>는 키 타입 K와 값 타입
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Sara: "B",
    kelly: "U"
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    kelly: { assign1: 76, assign2: 15 }
};
const score = {
    studentId: "k123",
    grade: 85,
};
const preview = {
    studentId: "k123",
    title: "final project"
};
//ReturnType
//함수의 반환 타입을 추출
// type newAssign = {title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    // 비동기 함수 fetchUsers는 Promise를 반환하며, User[] 타입의 배열을 처리합니다.
    try {
        const data = yield fetch(`https://jsonplaceholder.typicode.com/users`); // 웹 API를 사용하여 데이터를 비동기로 가져옵니다.
        const users = yield data.json(); // fetch로 가져온 데이터를 JSON으로 변환합니다.
        return users; // User[] 타입의 배열을 반환합니다.
    }
    catch (err) {
        // 에러가 발생한 경우 에러 메시지를 출력합니다.
        if (err instanceof Error) {
            console.log(err.message);
        }
        // 에러가 발생했을 때는 빈 배열을 반환합니다.
        return [];
    }
});
fetchUsers().then(users => console.log(users));
