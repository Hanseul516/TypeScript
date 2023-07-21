export interface Item {
    id: string,
    item: string,
    checked: boolean,
}

export default class ListItem implements Item {
    //class를 만들때 constructor, get, this 세트
    constructor(
        private _id: string = '', // = '',는 초기값으로 설정한 거
        private _item: string = '',
        private _checked: boolean = false,
    ) { }

    get id(): string {
        return this._id
    }

    set id(id: string) {
        this._id = id
    }

    get item(): string {
        return this._item
    }

    set item(item: string) {
        this._item = item
    }

    get checked(): boolean {
        return this._checked
    }

    set checked(checked: boolean) {
        this._checked = checked
    }


}