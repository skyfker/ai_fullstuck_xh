import React, { useState } from 'react';
import { Layout, Popconfirm, Menu } from 'antd';
const { Header, Sider, Content } = Layout;
import './index.scss'
import { useNavigate } from 'react-router-dom';

import { items, levelKeys } from './menu';

const LmLayout = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['/city']);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  const confirm = (e) => {
    console.log(e);
  };

  const { pathname } = '/'
  const navigate = useNavigate();
  const handlerSelect = (item) => {
    // console.log(item.key);
    navigate(item.key);
  };

  return (
    <Layout>
      <Header className='header'>
        <div className="logo"></div>
        <div className="user-info">
          <span className="user-name">蜗牛</span>
          <span className="user-logout">
            <Popconfirm
              title="是否确认退出？"
              onConfirm={confirm}
              okText="确认"
              cancelText="取消"
            >
              退出登录
            </Popconfirm>
          </span>
        </div>
      </Header>

      <Layout className='body'>
        <Sider width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={pathname}
          openKeys={stateOpenKeys}
          onSelect={handlerSelect}
          onOpenChange={onOpenChange}
          style={{
            width: '100%',
            height: '100%'
          }}
          items={items}
          theme='dark'
        />
        </Sider>

        <Content>Content</Content>
      </Layout>

    </Layout>
  );
};

export default LmLayout;