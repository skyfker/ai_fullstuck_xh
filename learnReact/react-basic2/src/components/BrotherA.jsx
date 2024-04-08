import React from 'react';

const BrotherA = props => {
    const msg = '来自子组件A的数据'

    hander = () => {
        props.changeMessage(msg)
    }

    return (
        <div>
            <h4 onClick={hander}>子组件A</h4>
        </div>
    );
};

export default BrotherA;