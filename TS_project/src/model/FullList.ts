import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void, //void: 값을 반환하지 않음
    save(): void,  //메서드 시그니처(Method Signature)
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}

export default class FullList implements List {

    static instance: FullList = new FullList()

    private constructor(private _list: ListItem[] = []) { }

    get list(): ListItem[] {
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList") //키의 '값'을 가져옴
        if (typeof storedList !== "string") return

        const parsedList: { _id: string, _item: string, _checked: boolean }[]
            = JSON.parse(storedList) //parse: JSON 형식 -> JavaScript 객체

        parsedList.forEach(itemObj => { //forEach: 지정된 함수를 순서대로 실행
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
        })
    }

    save(): void { //setItem: 데이터저장(식별자-데이터)  //stringify: JSON 문자열로 변환
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = [] //빈배열로 초기화하고
        this.save()  //다시 저장
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj) //itemObj를 _list 배열에 push
        this.save() //다시 저장
    }

    removeItem(id: string): void { //filter: 함수의 반환 값이 true인 새로운 배열생성
        this._list = this._list.filter(item => item.id !== id) //화살표 함수: (매개변수) => { 함수 본문 }
        this.save() //다시 저장
    }
}