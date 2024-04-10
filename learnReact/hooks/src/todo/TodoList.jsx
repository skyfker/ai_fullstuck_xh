import React from 'react';
import TotoItem from './TotoItem'
import { Input, Button } from 'antd';
import { useState } from 'react';

// 父组件
const TodoList = () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  const [list, setList] = useState(data);
  const [inputValue, setInputValue] = useState([]);

  const handle = (e) => {
    setInputValue(e.target.value);
  }

  const add = () => {
    setList(
      [...list, inputValue]
    );
  }

  
  const deleteData = (index) => {
    setList(
      list.filter((item, i) => {
        return i !== index;
      })
    )
  }

  return (
    <div style={{width: '400px'}}>

      <header style={{display: 'flex'}}>
        <Input placeholder="Basic usage" onChange={handle}/>
        <Button onClick={add}>提交</Button>
      </header> 

      <section>
        <TotoItem data={list} delete={deleteData}></TotoItem>
      </section>

    </div>
  );
};

export default TodoList;