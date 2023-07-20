// Utility Types

// Partial
//Partial<Assignment>을 사용하면 Assignment 타입의 모든 속성을 가질 수도 있고, 일부 속성만을 가질 수도 있는 객체를 만들 수 있다

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })


// Required and Readonly

const requiredAssignment = (assign: Required<Assignment>): Assignment => {
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}

// Record
// Record<K, V>는 키 타입 K와 값 타입
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

type Students = "Sara" | "kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    kelly: { assign1: 76, assign2: 15 }
}


// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k123",
    title: "final project"
}

//Exclude: 특정 타입을 제외하여 새로운 타입을 만들어주는 역할
//Extract: 특정 타입만을 추출하여 새로운 타입을 만들어주는 역할

type adjustedGrade = Exclude<LetterGrades, "U">
type highGrades = Extract<LetterGrades, "A" | "B">

// Ninnullable
//null과 undefined를 제거
type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

//ReturnType
//함수의 반환 타입을 추출

// type newAssign = {title: string, points: number}

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)

console.log(tsAssign)

//Parameters
//주어진 함수의 매개변수들의 타입을 튜플로 반환.
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)

console.log(tsAssign2)


