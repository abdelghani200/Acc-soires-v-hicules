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
                            <a href="">Home</a>
                            <router-link to="/ProduitsVue">Produits</router-link>
                            <a href="">Plus Vendus</a>
                            <a href="">Contacts</a>
                            <a href="">Blog</a>
                        </div>
                        <span class="toggle_icon" onclick="openNav()" style="width:54px;height: 54px;"><img
                                class="padding_10" src="images/toggle.webp"></span>
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
                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <span class="padding_10">Cart</span>
                                        </RouterLink>
                                        <!-- <a href="" >cart</a> -->
                                    </li>
                                    <li>
                                        <RouterLink to="/Login" style="color: black;" @click.prevent="showLoginModal">
                                            <i class="fa fa-user" aria-hidden="true"></i>
                                            <span class="padding_10">Login</span>
                                        </RouterLink>
                                        <button v-if="isLoggedIn" @click="logout">
                                            <i class="fa fa-user" aria-hidden="true"></i>
                                            <span class="padding_10">Logout</span>
                                        </button>
                                        <span aria-hidden="true">&times;</span>
                                    </li>
                                </ul>
                                <div v-if="showModal" class="modal">
                                    <div class="modal-content">
                                        <span class="close" @click="hideLoginModal">&times;</span>
                                        <Login />
                                    </div>
                                </div>

                                <div v-if="show" class="modal">
                                    <div class="modal-content">
                                        <span class="close" @click="hideCartModal">&times;</span>
                                        <Cart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- header section end -->
        </div>

        <div class="banner_section layout_padding">
            <div class="container" style="padding-top: 160px;">
                <div id="my_slider" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h1 class="banner_taital">Get Start <br>Your favriot shoping</h1>
                                    <div class="buynow_bt"><a href="#">Buy Now</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h1 class="banner_taital">Shop now <br>Yand start saving today!</h1>
                                    <div class="buynow_bt"><a href="#">Find out more</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h1 class="banner_taital">Welcome <br>To in Accesoires Véhicules</h1>
                                    <div class="buynow_bt"><a href="#">Buy Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                        <i class="fa fa-angle-left"></i>
                    </a>
                    <a class="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>

    </div>
    <!-- banner bg main end -->
    <div class="jewellery_section">
        <div id="jewellery_main_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container">
                        <h1 class="fashion_taital">Voitures Accessories</h1>
                        <div class="fashion_section_2">
                            <div class="row">
                                <div class="col-lg-4 col-sm-4" v-for="produit in products.slice(6, 9)" :key="produit.id">
                                    <div class="box_main">
                                        <h4 class="shirt_text">{{ produit.name }}</h4>
                                        <p class="price_text">Start Price <span style="color: #262626;">$ {{ produit.price
                                        }}</span></p>
                                        <div class="jewellery_img"><img src="../../public/images/v_1.jpg"></div>
                                        <div class="btn_main" style="justify-content: space-between;">
                                            <div class="buy_bt"><a href="#">Buy Now<span style="color: aqua;"></span></a>
                                            </div>
                                            <div class="seemore_bt">
                                                <RouterLink to="/details" class="">See More</RouterLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <h1 class="fashion_taital">Motos Accessories</h1>
                        <div class="fashion_section_2">
                            <div class="row">
                                <div class="col-lg-4 col-sm-4" v-for="produit in products.slice(6, 9)" :key="produit.id">
                                    <div class="box_main">
                                        <h4 class="shirt_text">{{ produit.name }}</h4>
                                        <p class="price_text">Start Price <span style="color: #262626;">$ {{ produit.price
                                        }}</span></p>
                                        <div class="jewellery_img"><img src="../../public/images/v_1.jpg"></div>
                                        <div class="btn_main">
                                            <div class="buy_bt"><a href="#">Buy Now</a></div>
                                            <div class="seemore_bt"><a href="#">See More</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <h1 class="fashion_taital">Voitures Accessories</h1>
                        <div class="fashion_section_2">
                            <div class="row">
                                <div class="col-lg-4 col-sm-4" v-for="produit in products.slice(6, 9)" :key="produit.id">
                                    <div class="box_main">
                                        <h4 class="shirt_text">{{ produit.name }}</h4>
                                        <p class="price_text">Start Price <span style="color: #262626;">$ {{ produit.price
                                        }}</span></p>
                                        <div class="jewellery_img"><img src="../../public/images/v_3.jpg"></div>
                                        <div class="btn_main">
                                            <div class="buy_bt"><a href="#">Buy Now</a></div>
                                            <div class="seemore_bt"><a href="#">See More</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="" role="button" data-slide="prev">
                <i class="fa fa-angle-left"></i>
            </a>
            <a class="carousel-control-next" href="" role="button" data-slide="next">
                <i class="fa fa-angle-right"></i>
            </a>
            <div class="loader_main">
                <div class="loader"></div>
            </div>
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
        Cart
    },
    data() {
        return {
            categories: [],
            produits: [],
            products: [],
            showModal: false,
            show: false
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
                    this.produits = response.data.data
                    console.log(this.produits);
                    console.log(this.categorieId);
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
        }

    },
    created() {
        this.getCategories()
        this.getProducts()
    }
}
</script>

