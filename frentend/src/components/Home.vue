<template>
    <div class="banner_bg_main" style="margin-top: 80px;">
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
                                <div class="col-lg-4 col-sm-4" v-for="produit in produits.slice(6, 9)" :key="produit.id">
                                    <div class="box_main">
                                        <h4 class="shirt_text">{{ produit.name }}</h4>
                                        <p class="price_text">Start Price <span style="color: #262626;">$ {{
                                            produit.price
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
                                <div class="col-lg-4 col-sm-4" v-for="produit in produits.slice(6, 9)" :key="produit.id">
                                    <div class="box_main">
                                        <h4 class="shirt_text">{{ produit.name }}</h4>
                                        <p class="price_text">Start Price <span style="color: #262626;">$ {{
                                            produit.price
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
                                <div class="col-lg-4 col-sm-4" v-for="produit in produits.slice(6, 9)" :key="produit.id">
                                    <div class="box_main">
                                        <h4 class="shirt_text">{{ produit.name }}</h4>
                                        <p class="price_text">Start Price <span style="color: #262626;">$ {{
                                            produit.price
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

import axios from 'axios';

export default {

    data() {

        return {

            produits: [],
            currentPage: 1,
            itemsPerPage: 5,

        }

    },

    

    methods: {

        getProduits() {

            axios.get('api/products')

                .then(response => {

                    this.produits = response.data.data;
                    console.log(this.produits);
                })

                .catch(error => {

                    console.log(error);

                });

        }

    },

    mounted() {

        this.getProduits();

    }


}



</script>