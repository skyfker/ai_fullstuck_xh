# hooks
- 让函数更加强大的钩子
- hoooks 只能在函数组件中使用

1. useState() 为函数组件提供状态
2. useEffect() 默认执行一次，当组件中有状态更新导致组件重新渲染时，useEffect()会再次执行
    - 可以充当组件的componentdidMount 和 componentwillUnmount 和 componentDidUpdate

3. useRef   函数组件中获取组件的DOM节点
4. useContext  createContext() 创建上下文,用于父组件提供数，子组件通过useContext()来接收数据