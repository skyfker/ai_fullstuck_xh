import React, { Component } from 'react';
import PChild from './components/PChild';

class PApp extends Component {
    callBack = (message) => {
        console.log(message);
    }

    render() {
        return (
            <div>
                <h2>父组件</h2>
                <PChild cb={this.callBack}/>
            </div>
        );
    }
}

export default PApp;