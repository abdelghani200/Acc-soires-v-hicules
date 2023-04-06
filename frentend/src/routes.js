import { createRouter, createWebHistory } from 'vue-router';

import Login from './components/Login.vue';

import Register from './components/Register.vue';

import Dashboard  from './views/Dashboard.vue';

import Cart from './components/Cart.vue';

import AddCategorie from './components/Admin/categories/AddCategorie.vue';

import order from './components/Admin/orders/order.vue';

import produits from './components/Admin/produits/produits.vue';

import Product from './components/Product.vue';

import DetailProduct from './components/DetailProduct.vue';

import DisplayCategories from './components/Admin/categories/DisplayCategories.vue';

import Statiques from './components/Admin/Statiques.vue';

import ProduitsVue from './components/ProduitsVue.vue';




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
    },
    {
        path: '/AddCategorie',
        component: AddCategorie,
    },
    {
        path: '/order',
        component: order,
    },
    {
        path:'/produits',
        component: produits,
    },
    {
        path: '/Product',
        component: Product,
    },
    {
        path: '/details',
        component: DetailProduct
    },
    {
        path: '/DisplayCategories',
        component: DisplayCategories
    },
    {
        path: '/statiques',
        component: Statiques
    },
    {
        path: '/ProduitsVue',
        component: ProduitsVue
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

