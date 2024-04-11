import React from 'react'
import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom'
import LayoutWrap from '../pages/layout'
import Students from '../pages/students'
import Employment from '../pages/employment'
import Personal from '../pages/personal'
import Login from '../pages/login'
// const LayoutWrap = React.lazy(() => import('../pages/layout'))
// const Students = React.lazy(() => import('../pages/students'))
// const Employment = React.lazy(() => import('../pages/employment'))
// const Personal = React.lazy(() => import('../pages/personal'))


const routerList = [
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/layout',
    element: <LayoutWrap/>,
    children: [
      {
        path: '',
        element: <Navigate to='/layout/students'/>,
      },
      {
        path: 'students',
        element: <Students/>
      },
      {
        path: 'employment',
        element: <Employment/>
      },
      {
        path: 'personal',
        element: <Personal/>
      }
    ]
  },
]


function Element() {
  return useRoutes(routerList)  // <Route path="/" element={<Home/>}/>
}

function WrapperRoutes () {
  return (
    <BrowserRouter>
      <Element/>
    </BrowserRouter>
  )
}

export default WrapperRoutes