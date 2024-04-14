import React from 'react';
import counterStore from '../../store/counterStore'
import { observer } from 'mobx-react-lite'

const Count = () => {
  return (
    <div>
      {/* <button onClick={() => counterStore.addCount()}>{counterStore.count}</button>
      <ul>
        {
            counterStore.newList.map((item, index) => {
                return <li key={index}>{item}</li>
            })
        }
      </ul> */}
      {JSON.stringify(counterStore.list)}
      {/* {JSON.stringify(counterStore.newList)} */}

      <button onClick={() => counterStore.pushList()}>push</button>
    </div>
  );
};

export default observer(Count);  // observer 实时监听Count组件