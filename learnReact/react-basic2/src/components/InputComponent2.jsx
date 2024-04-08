import React, { Component, createRef } from 'react';

// 非受控组件  输入框的value状态不被react组件控制
class InputComponent2 extends Component {
    msgRef = createRef(); // 创建了一个存放dom的容器

    changeMessage = () => {
        console.log(this.msgRef.current.value);
    };

    render() {
        return (
            <div>
                <input type="text" ref={this.msgRef} />
                <button onClick={ this.changeMessage }>提交</button>
            </div>
        );
    }
}

export default InputComponent2;