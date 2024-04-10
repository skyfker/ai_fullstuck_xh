import React, { Component, createRef } from 'react';

class Life extends Component {
    constructor() {
        super();
        // console.log('Life 组件开始加载', this.ref);
        this.ref = createRef();
        // this.count = 1
        this.state = {
            count: 1
          }
        
      
    }

    handerClick = () => {
        // this.count++;
        // this.forceUpdate(); //强制更新组件
        this.setState({
            count: this.state.count + 1
          })
    }

    componentDidMount() {
        // console.log('Life 组件挂载完成');
    }

    render() {
        // console.log('Life 组件渲染', this.ref);
        return (
            <div>
                {/* <h4 ref={this.ref} onClick={() => this.handerClick()} >{this.count}</h4> */}
                <h4 ref={this.ref} onClick={() => this.handerClick()}>{this.state.count}</h4>
            </div>
        );
    }
}

export default Life;