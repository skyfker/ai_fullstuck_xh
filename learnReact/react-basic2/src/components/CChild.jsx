// import React, { Component } from 'react';

// class CChild extends Component {
//     render() {
//         return (
//             <div>
//                 <h4>子组件</h4>
//                 <p>{this.props.message}</p>
//             </div>
//         );
//     }
// }

// export default CChild;


function CChild(props) {
    // console.log(props);
    // props.message = '子组件修改后的值';   // 只能读，不能改。会报错
    props.changeMessage();
    return (
        <div>
            <h2>子组件</h2>
            <p>{props.message}</p>
        </div>
    );
}

export default CChild;