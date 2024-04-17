import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AuthRouter} from '@/components/AuthRoute'

import Login from './pages/login';
import Layout from '@/pages/layout';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <Routes>
                    <Route path='/' element={<AuthRouter><Layout /></AuthRouter>} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;