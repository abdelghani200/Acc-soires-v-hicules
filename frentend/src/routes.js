import { createRouter, createWebHistory } from 'vue-router';

import Login from './components/Login.vue';

import Register from './components/Register.vue';

import Dashboard  from './components/Admin/Dashboard.vue';

import Cart from './components/Cart.vue';

const routes = [
    {
        path: '/Login',
        component: Login,
    },
    {
        path: '/Register',
        component: Register,
    },
    {
        path: '/Dashboard',
        component: Dashboard,
    },
    {
        path: '/Cart',
        component: Cart,
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

