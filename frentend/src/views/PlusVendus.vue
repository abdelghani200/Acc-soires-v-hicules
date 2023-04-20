<template>
    <div class="jewellery_section" style="margin-top: 160px;">
        <!-- <div class="col-lg-9"> -->
            <div id="jewellery_main_slider" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="fashion_section_2">
                                <h1 class="fashion_taital">Accessories plus vendus</h1>
                                <div class="row">
                                    <div class="col-lg-4 col-sm-4" v-for="produit in produits" :key="produit.id">
                                        <div class="box_main">
                                            <h4 class="shirt_text" style="text-transform: capitalize;">{{ produit.name
                                            }}</h4>
                                            <p class="price_text">Start Price <span style="color: #262626;">$ {{
                                                produit.price }}</span></p>
                                            <div class="jewellery_img"><img :src="produit.image"> </div>
                                            <div class="btn_main" style="justify-content: space-between;">
                                                <div class="buy_bt"><a href="#">Buy Now<span
                                                            style="color: aqua;"></span></a></div>
                                                <div class="seemore_bt">
                                                    <RouterLink :to="{ name: 'DetailProduct', params: { id: produit.id } }">
                                                        See
                                                        More</RouterLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>

</template>








  
<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    name: "PlusVendus",
    data() {
        return {
            produits: [],
        };

    },


    methods: {

        getPlusVendus() {
            axios.get('api/best-selling-products')
                .then(response => {
                    this.produits = response.data.data;
                    console.log(this.produits);
                })
                .catch(error => {
                    console.log(error);
                });
        }

    },

    created() {
        this.getPlusVendus();
    },

}
</script>
