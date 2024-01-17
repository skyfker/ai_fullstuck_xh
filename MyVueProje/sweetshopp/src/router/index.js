import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/intro'
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import('../views/Intro.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router