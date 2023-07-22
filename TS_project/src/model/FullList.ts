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

    get list(): ListItem[]{
        return this._list
    }

    save():
}