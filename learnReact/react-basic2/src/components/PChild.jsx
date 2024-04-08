import React, { Component } from 'react';

class PChild extends Component {
    state = {
        msg: '子组件的数据'
    }

    hander = () => {
        this.props.cb(this.state.msg);
    }

    render() {
        return (
            <div>
                <h4>子组件</h4>
                <button onClick={this.hander}>传递</button>
            </div>
        );
    }
}

export default PChild;