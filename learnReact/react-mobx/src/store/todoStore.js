import { makeAutoObservable } from 'mobx'

class TodoStore {
    list = [
        {id: 1, name: '吃饭', isDone: true},
        {id: 2, name: '睡觉', isDone: false},
        {id: 3, name: '打豆豆', isDone: false},
    ]
    constructor() {
        makeAutoObservable(this)
    }

    checkItem(id) {

    }
}

export default new TodoStore