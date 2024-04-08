import React, { Component } from 'react';
import CChild from './components/CChild';

class CApp extends Component {
state = {
    message: '这是父组件的数据'
}
changeMessage = (message) => {
    this.setState({
        message: message
    })
}

    render() {
        return (
            <div>
                <h2>父组件</h2>
                <CChild message={this.state.message}/>
            </div>
        );
    }
}

export default CApp;

