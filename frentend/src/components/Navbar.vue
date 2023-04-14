<template>
    <!-- banner bg main start -->
    <div class="banner_bg_main" style="margin-top: 80px;">

        <div class="navbar" style="position: fixed;top: 0;left: 0;width: 100%;background-color: #fff;z-index: 999;">
            <!-- header top section start -->
            <div class="container">
                <div class="header_section_top">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="custom_menu">
                                <ul>
                                    <li><a href="#">Accessoire Véhicules</a></li>
                                    <li><a href="#">Voitures</a></li>
                                    <li><a href="#">Motos</a></li>
                                    <li><a href="#">Camions</a></li>
                                    <li><a href="#">vélos</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- header top section start -->
            <!-- logo section start -->
            <div class="logo_section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="logo">
                                <h1 href=""><span style="color: red;">A</span>ccessoire <span
                                        style="color: red;">V</span>éhicules</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- logo section end -->
            <!-- header section start -->
            <div class="header_section">
                <div class="container">
                    <div class="containt_main">
                        <div id="mySidenav" class="sidenav">
                            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                            <RouterLink to=" ">Home</RouterLink>
                            <RouterLink to="/ProduitsVue">Produits</RouterLink>
                            <a href="">Plus Vendus</a>
                            <a href="">Contacts</a>
                            <RouterLink to="/BlogVue">Blog</RouterLink>
                        </div>
                        <span class="toggle_icon" onclick="openNav()" style="width:54px;height: 54px;"><img
                                class="padding_10" src="/images/toggle.webp"></span>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#" v-for="categorie in categories" :key="categorie.id"
                                    @click="getProduits(categorie.id)">{{ categorie.name }}</a>
                            </div>
                        </div>
                        <div class="main">
                            <!-- Another variation with a button -->
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search this blog">
                                <div class="input-group-append">
                                    <button class="btn btn-secondary" type="button"
                                        style="background-color: #f26522; border-color:#f26522;z-index: -1;">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="header_box">
                            <div class="lang_box ">
                                <a href="#" title="Language" class="nav-link" data-toggle="dropdown" aria-expanded="true">
                                    <i class="fa-solid fa-location-dot" aria-hidden="true"
                                        style="font-size: 18px;"></i><span class="padding_10">Position</span>
                                </a>
                            </div>
                            <div class="login_menu">
                                <ul>
                                    <li>
                                        <RouterLink to="/Cart" style="color: black;" @click.prevent="showCartModal">
                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i><sup>{{ cartItems.length
                                            }}</sup>
                                            <span class="padding_10">Cart</span>
                                        </RouterLink>
                                    </li>
                                    <li>
                                        <template v-if="isAuthenticated == true">
                                            <button @click.prevent="logout" style="background-color: white;">
                                                <i class="fa-solid fa-right-from-bracket"></i>
                                                <span class="padding_10">Logout</span>
                                            </button>
                                        </template>
                                        <template v-else>
                                            <RouterLink to="/Login" style="color: black;" @click.prevent="showLoginModal">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                                <span class="padding_10">Login</span>
                                            </RouterLink>
                                        </template>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- header section end -->
        </div>



    </div>
</template>




<script>


import axios from 'axios'

import { RouterLink } from 'vue-router';

import Login from './Login.vue'

import Cart from './Cart.vue'

export default {
    name: 'Navbar',
    components: {
        Login,
        Cart,
        RouterLink
    },
    data() {
        return {
            categories: [],
            produits: [],
            products: [],
            cartItems: [],
            showModal: false,
            show: false,
            isAuthenticated: localStorage.getItem("isLoggedIn") === "true"
        }
    },
    methods: {
        showLoginModal() {
            this.showModal = !this.showModal
        },
        hideLoginModal() {
            this.showModal = false
        },
        showCartModal() {
            this.show = true
        },
        hideCartModal() {
            this.show = false
        },

        getCategories() {
            axios
                .get('api/categories')
                .then(response => {
                    this.categories = response.data.data
                    console.log(this.categories);
                })
        },
        getProduits(categorieId) {

            axios
                .get(`api/categories/${categorieId}/products`)
                .then(response => {
                    this.produits = response.data
                    console.log(response);
                    console.log(this.produits);
                    console.log(categorieId);
                })
                .catch(error => {
                    alert('hhh wlh ladkhalti');
                })
        },
        getProducts() {
            axios
                .get('api/products')
                .then(response => {
                    this.products = response.data.data
                    console.log(this.products);
                })
        },
        getNbCarts() {
            axios
                .get('api/cart', {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                    }
                })
                .then(response => {
                    this.cartItems = response.data.data
                    console.log(this.cartItems);
                })
        },
        logout() {
            localStorage.removeItem('access_token')
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('user_id')
            this.isAuthenticated = false
            this.$router.push('/Login')
        }

    },
    created() {
        this.getCategories()
        this.getProducts()
        this.getNbCarts()
    }
}
</script>

