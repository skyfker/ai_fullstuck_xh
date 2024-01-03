//配置路由
// #/movie  /movie  前端路由的两种形式 # hash  /  history

import { createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [
  //每个路由对象
  {
    path: '/',
    name: 'home',
    //menu ,head ,router-viwe -> discover Layout
    component: () => import('../views/Root.vue'),
    redirect:{name: 'discover'},
    //网站三层  且套路由
    children: [
      {
        path:'discover',
        name:'discover',
        component: () => import('../views/discover/Discover.vue'),
        // 路由对象 添加属性 meta 媒体信息
        meta: {
          menu: 'discover',
          keepAlive: true
        }
      },
      {
        path:'music',
        name:'music',
        component: () => import('../views/music/Music.vue'),
        meta: {
          menu: 'music',
          keepAlive: true
        }
      },
    ]
  },
]

// 路由单例
const router = createRouter({
  history: createWebHistory(),
  //路由数组
  routes
})

export default router
