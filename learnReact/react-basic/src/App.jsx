import React from 'react'
import ExitComponent from './components/ExitComponent'
import ClassComponent from './components/ClassComponent'

class HelloVue extends React.Component {
    render () {
        return <h3>这是一个类组件</h3>
    }
}

function HelloReact () {
    const handleClick = (e) => {
        console.log('click me', e)
    }

    return <div>
        <p>这是一个函数组件</p>
        <button onClick={handleClick}>click me</button>
    </div>
}


function App ()
{
    return (
        <div className="app">
            <HelloReact />
            <HelloVue />
            <hr/>
            <ExitComponent />
            <ClassComponent />
        </div>
    );
}

export default App;