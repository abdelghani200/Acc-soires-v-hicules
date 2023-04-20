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


import achats from './components/Admin/produits/achats.vue';


import Contact from './views/Contact.vue';

import PlusVendus from './views/PlusVendus.vue';

const authMiddleware = (to, from, next) => {
    const isAuthenticated = localStorage.getItem('isLoggedIn')
    const userRole = localStorage.getItem("RoleUser")
    const redirect_url = localStorage.getItem("/dashboard")

    if (!isAuthenticated) {
        // redirect the user to the login page if they are not authenticated
        next({ path: '/login' })
    } else if (userRole === 'Admin') {
        if (to.path === (window.location.href = redirect_url)) { 
            // if the user is already on the dashboard route, allow access without redirecting
            next()
        } else {
            // redirect the user to the dashboard page if they are an admin
            next({ path: '/dashboard' })
        }
    } else {
        // allow the user to access the route
        next()
    }
}




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
        beforeEnter: authMiddleware
    },
    {
        path: '/Cart',
        component: Cart,
    },
    {
        path: '/AddCategorie',
        component: AddCategorie,
        // beforeEnter: authMiddleware
    },
    {
        path: '/order',
        component: order,
        // beforeEnter: authMiddleware
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
        path: '/achats/:id',
        component: achats,
        name: 'achats',
        // beforeEnter: authMiddleware
    },
    {
        path: '/DisplayCategories',
        component: DisplayCategories,
        // beforeEnter: authMiddleware
    },
    {
        path: '/statiques',
        component: Statiques,
        // beforeEnter: authMiddleware
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
        path: '/Contact',
        component: Contact,
    },
    {
        path: '/PlusVendus',
        component: PlusVendus
    },
    {
        path: '/clients',
        component: ClientsVue
    },
    {
        path: '/updateProduct/:id',
        component: update,
        name: 'updateProduct',
        props: route => ({ id: route.params.id }),
        // beforeEnter: authMiddleware
    },
    {
        path: '/UpdateCategorie/:id',
        component: UpdateCategorie,
        name: 'UpdateCategorie',
        props: route => ({ id: route.params.id }),
        // beforeEnter: authMiddleware
    },
    {
        path: '/add',
        component: add,
        // beforeEnter: authMiddleware
    },
    {
        path: '/addCategorie',
        component: AddCategorie,
        // beforeEnter: authMiddleware
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

