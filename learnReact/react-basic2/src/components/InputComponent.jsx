import React, { Component } from 'react';

// 受控表单组件  --- 输入框自己的value 被react组件状态所控制
class InputComponent extends Component {
    state = { 
        message:'床前明月光'
    }

    changeMessage = (e) => {
        console.log(e.target.value);
        this.setState({
            message: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.message} onChange={this.changeMessage}/>
            </div>
        );
    }
}

export default InputComponent;