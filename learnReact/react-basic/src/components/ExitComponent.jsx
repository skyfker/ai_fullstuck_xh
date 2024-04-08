const ExitComponent = () => {
    const list = [
        {id:1,name:'张三',age:18},
        {id:2,name:'张麻子',age:18}
    ]

    const onDel = (id) => {
        console.log(id)
    }

    return (
      <div>
        <p>这是一个额外的组件</p>
        <ul>
          {
          list.map(item => (
            <li key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => onDel(item.id)}>x</button>
            </li>
          ))
          }
        </ul>
      </div>
    );
  };
  
  export default ExitComponent;