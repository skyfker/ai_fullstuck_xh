import React from 'react';
// import List from './components/List'
// import Page from './components/Page';
// import Life from './components/Life';
import TodoList from './todoList/TodoList';

const App = () => {
  const colors = [
    {id:1, name:'red', value:'#f00'},
    {id:2, name:'green', value:'#0f0'},
    {id:3, name:'blue', value:'#00f'}
  ]

  return (
    <div>
      {/* <h4> Hello react</h4>
      <hr /> */}
      {/* <List colors = {colors}  fn = {() => {}} obj={{name:'张三'}}/> */}
      {/* <Page></Page> */}
      {/* <Life /> */}
      <TodoList />
    </div>
  );
};

export default App;