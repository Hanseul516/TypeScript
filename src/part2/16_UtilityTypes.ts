// Utility Types

// Partial

interface Assignment {
    studetId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}
//Partial<Assignment>을 사용하면 Assignment 타입의 모든 속성을 가질 수도 있고, 일부 속성만을 가질 수도 있는 객체를 만들 수 있다

const assign1: Assignment = {
    studetId: "compsci123",
    title: "final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })


// Required and Readonly