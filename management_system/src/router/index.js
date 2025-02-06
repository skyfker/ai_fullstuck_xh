import { createRouter,createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/Main.vue'),
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/Home.vue')
            },
        ]
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router