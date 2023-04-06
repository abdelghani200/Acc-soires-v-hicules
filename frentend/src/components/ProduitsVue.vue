<template>
    <div class="carousel-item">
        <div class="container">
            <h1 class="fashion_taital">Jewellery Accessories</h1>
            <div class="fashion_section_2" >
                <div class="row" >
                    <div class="col-lg-4 col-sm-4" v-for="produit in produits" :key="produit.id">
                        <div class="box_main">
                            <h4 class="shirt_text">{{ produit.name }}</h4>
                            <p class="price_text">Start Price <span style="color: #262626;">$ {{ produit.price }}</span></p>
                            <div class="jewellery_img"><img src="images/jhumka-img.png"></div>
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
    <!-- <RouterView></RouterView> -->
</template>

<script>


import axios from 'axios';

export default {

    data() {

        return {

            produits: []

        }

    },

    methods: {

        getProduits() {

            axios.get('/api/products')

                .then(response => {

                    this.produits = response.data.data;

                })

                .catch(error => {

                    console.log(error);

                });

        }

    },
}



</script>

<style>

</style>