import React from 'react';
import LoginStore from './login.Store.js';

class RootStore {
    constructor() {
        this.loginStore = new LoginStore();
    }
}

const context = React.createContext(new RootStore()); // 创建一个context对象, 默认值为RootStore实例

export const useStore = () => React.useContext(context); // 封装一个useStore方法, 返回context对象
