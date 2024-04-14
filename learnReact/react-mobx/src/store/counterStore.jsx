import { makeAutoObservable} from 'mobx'

class CounterStore {
  count = 0  // 数据源
  list = [1, 2, 3, 4]
  constructor() {
    makeAutoObservable(this) // 当类中的属性值变更，就会触发组件更新
  }

  addCount () {
    this.count++
  }

  pushList () {
    this.list.push(5, 6)
  }

  get newList () {
    return this.list.map(item => item * 10)
  }
  
}

const counter = new CounterStore()

export default counter