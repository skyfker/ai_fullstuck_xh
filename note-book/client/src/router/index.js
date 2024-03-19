import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Reigster',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/noteClass',
    name: 'NoteClass',
    component: () => import('@/views/NoteClass.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router