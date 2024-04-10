# 组件
- props 中的数据类型
 1. 安装 prop-types 包
 2. 为组件添加校验规则 List.propTypes = {}   .isRequired表示必传
 3. 可以设置默认值
  - 函数式组件
  - 类组件

# 生命周期
- 挂载阶段
  1. constructor()
  2. render()
  3. componentDidMount()

- 更新阶段
  1. render()
  2. componentDidUpdate()
  
- 卸载阶段
  1. componentWillUnmount()