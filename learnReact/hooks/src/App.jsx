// import Con from './_context.js'
// import Context from './components/Context'

// const Con = createContext() 

import TodoList from "./todo/TodoList";
const App = () => {
  return (
    // <Con.Provider value={'来自App中的数据'}>
    //   <div>
    //     <Context/>
    //   </div>
    // </Con.Provider>
    
    <div>
      <TodoList/>

    </div>
  );
};

export default App;