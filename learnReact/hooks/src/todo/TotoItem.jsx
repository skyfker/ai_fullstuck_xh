import React from 'react';
import { List, Button } from 'antd';

// 子组件
const TotoItem = (props) => {
  const handleDelete = (index) => {
    props.delete(index);
  };

  return (
    <div>
      <List
        bordered
        dataSource={props.data}
        renderItem={(item, index) => (
          <List.Item>
            {item}
            <Button onClick={() => handleDelete(index)}>
              删除
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TotoItem;