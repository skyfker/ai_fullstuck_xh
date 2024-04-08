// 根组件
import './Jsx.css'


const songs = [
  {id:1, name:'Song 1', singer:'Singer 1'},
  {id:2, name:'Song 2', singer:'Singer 2'},
  {id:3, name:'Song 3', singer:'Singer 3'},
]

const flag = true
const style = {color:'blue'}
const showGreen = true

function App () {
  return (
    <>
    <div className="app">
      <h2>Hello React</h2>
      <ul>
        {
          songs.map(item => { // 不能用forEach，要有返回值。
            return <li key={item.id}>{item.name} - {item.singer}</li>
          })
        }
      </ul>
      <h3>{flag ? 'True' : 'False'}</h3>
      {flag && <a href="#">True</a>}
      {/* {flag ? <a href="#">True</a> : null} */}

      <h2 style={{color:'red'}}>红色字体</h2>
      <h2 style={style}>蓝色字体</h2>
      <h2 className={ showGreen ? 'green' : '' }>绿色字体</h2>
    </div>

    <div className="app2">1213124</div>
    </>
  )
}

export default App