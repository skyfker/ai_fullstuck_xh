import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { // 路由元信息,一定要叫meta。可以用于设置页面标题
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'Reigster',
    component: () => import('@/views/Register.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/noteClass',
    name: 'NoteClass',
    component: () => import('@/views/NoteClass.vue'),
    meta: {
      title: '笔记分类'
    }
  },
  {
    path: '/noteList',
    name: 'NoteList',
    component: () => import('@/views/NoteList.vue'),
    meta: {
      title: '笔记列表'
    }
  },
  {
    path: '/noteDetail',
    name: 'NoteDetail',
    component: () => import('@/views/noteDetail.vue'),
    meta: {
      title: '笔记详情'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局路由守卫
const whitePath = ['/login', '/register']

router.beforeEach((to, from, next)=> {
  // console.log(to, from);
  document.title = to.meta.title   // 设置页面标题

  if(!whitePath.includes(to.path)) {
    //看本地存储有没有值
    if(localStorage.getItem('userInfo')) {
      next()
    } else {
      next('/login')
    }
  }
  next()
})

export default router