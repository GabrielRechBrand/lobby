import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./components/Home.vue')
        },
        {
            path: '/contact',
            component: () => import('./components/Contact.vue')
        },
        {
            path: '/about',
            component: () => import('./components/About.vue')
        }
    ]
});