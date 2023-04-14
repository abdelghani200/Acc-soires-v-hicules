import { createRouter, createWebHistory } from 'vue-router';

import Login from './components/Login.vue';

import Register from './components/Register.vue';

import Dashboard from './views/Dashboard.vue';

import Cart from './components/Cart.vue';

import AddCategorie from './components/Admin/categories/AddCategorie.vue';

import order from './components/Admin/orders/order.vue';

import produits from './components/Admin/produits/produits.vue';

import Product from './components/Product.vue';

import DetailProduct from './components/DetailProduct.vue';

import DisplayCategories from './components/Admin/categories/DisplayCategories.vue';

import Statiques from './components/Admin/Statiques.vue';

import ProduitsVue from './components/ProduitsVue.vue';

import ClientsVue from './views/ClientsVue.vue';

import Home from './components/Home.vue';

import update from './components/Admin/produits/update.vue';

import UpdateCategorie from './components/Admin/categories/UpdateCategorie.vue';

import add from './components/Admin/produits/add.vue';

import BlogVue from './views/BlogVue.vue';


const routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: '/Login',
        component: Login,
    },
    {
        path: '/Register',
        component: Register,
    },
    {
        path: '/dashboard',
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
        path: '/produits',
        component: produits,
    },
    {
        path: '/Product',
        component: Product,
    },
    {
        path: '/details/:id',
        component: DetailProduct,
        name: 'DetailProduct', 
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
    },
    {
        path: '/BlogVue',
        component: BlogVue,
    },
    {
        path: '/clients',
        component: ClientsVue
    },
    { path: '/updateProduct/:id',
     component: update,
     name: 'updateProduct' ,
     props: route => ({ id: route.params.id }),
    },
    {
        path: '/UpdateCategorie/:id',
        component: UpdateCategorie,
        name: 'UpdateCategorie',
        props: route => ({ id: route.params.id }),
    },
    {
        path: '/add',
        component: add,
    },
    { 
        path: '/addCategorie',
        component: AddCategorie,
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

