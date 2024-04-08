import React, { Component } from 'react'

export default class ClassComponent extends Component { //extends + super 才能继承的了
  constructor() {
    super()
    this.list = [
        {id:1,name:'张三',age:18},
        {id:2,name:'张麻子',age:18}
    ]
  }

  onDel(id) {
    console.log(id)
  }

  render() {
    return (
      <div>
        <p>这是一个类组件</p>
        <ul>
            {
                this.list.map((item)=>{
                    return <li key={item.id}>
                        <span>{item.name}</span>
                        <button onClick={() => this.onDel(item.id)}>x</button>
                    </li>
                })
            }
        </ul>
      </div>
    )
  }
}
