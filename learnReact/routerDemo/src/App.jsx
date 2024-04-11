import React from 'react';
import { BrowserRouter, Link, Routes, Route, useNavigate, useSearchParams, useParams } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            this is home page
            {/* <button onClick={() => navigate('/about?id=123', { replace: true })}>跳去about</button>  */}
            {/* replace:true表示跳转后，不能返回 */}
            <button onClick={() => navigate('/about/:age', { replace: true })}>跳去about</button> 

        </div>
        
    )
}
const About = () => {
    // let [params] = useSearchParams();
    // console.log(params.get('id'));



    return (
        <div>
            this is about page
        </div>
    )
}

const App = () => {
    return (
        <div className='app'>
            <BrowserRouter>
                <Link to='/'>首页</Link>
                <Link to='/about'>关于</Link>

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                </Routes>
            </BrowserRouter>
            
            
        </div>
    );
};

export default App;