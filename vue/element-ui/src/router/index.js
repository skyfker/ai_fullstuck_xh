import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    name:'login',
    component:() => import('@/views/login.vue')
  },
  {
    path:'/home',
    name:'home',
    component:() => import('@/views/home.vue'),
    children: [
      {
        path:'/home',
        redirect:'/home/list'
      },
      {
        path: 'list',
        component: () => import('@/views/list.vue'),
      },
      {
        path: '/home/document',
        component: () => import('@/views/document.vue'),
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
