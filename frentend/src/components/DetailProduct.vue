<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-6" style="margin-top: 115px;">
                <!-- <img src="https://placehold.it/500x500" class="img-fluid" alt="Product Image"> -->
                <!-- <img :src="product.image" class="img-fluid" alt="Product Image"> -->
            </div>
            <div class="col-md-6" style="margin-top: 115px;">
                <h1 class="h3 mb-3">{{ product.name }}</h1>
                <h1 type="hidden" class="h3 mb-3">{{ product.id }}</h1>
                <div class="mb-3">
                    <span class="text-warning">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span class="text-muted">(10 customer reviews)</span>
                </div>
                <p class="lead mb-4">{{ product.description }}</p>
                <div class="mb-3">
                    <label class="form-control" for="product-color">Color:</label>
                    <select class="form-control" id="product-color">
                        <option class="group-form" selected>Choose color</option>
                        <option class="group-form" value="red">Red</option>
                        <option class="group-form" value="blue">Blue</option>
                        <option class="group-form" value="green">Green</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="product-quantity">Quantity:</label>
                    <input type="number" class="form-control" id="product-quantity" v-model="quantity" min="1" max="10">
                </div>
                <button class="btn btn-primary mb-3" @click="addToCart">Add to Cart</button>
                <div class="mb-3">
                    <label for="share" class="form-control">Share:</label>
                    <div class="btn-group" role="group" aria-label="Share Buttons">
                        <a href="#" class="btn btn-outline-secondary"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="btn btn-outline-secondary"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#" class="btn btn-outline-secondary"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="btn btn-outline-secondary"><i class="fa-brands fa-google"></i></a>
                        <a href="#" class="btn btn-outline-secondary"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div v-else>
        v-if="product"
        <p>Loading...</p>
    </div> -->
</template>

<script>
import axios from 'axios';

export default {
    name: 'DetailProduct',
    data() {
        return {
            product: [],
            quantity: 1,
        };
    },
    async mounted() {
        const productId = this.$route.params.id;
        try {
            const response = await axios.get(`api/products/${productId}`);
            this.product = response.data.data;
            console.log(this.product);
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        
        addToCart() {
            const productId = this.$route.params.id;
            axios.post('api/addToCart', {
                user_id: localStorage.getItem('user_id'),
                product_id: productId,
                quantity: this.quantity,
            }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            })
                .then((response) => {
                    console.log(response.data);
                    this.$router.push('/Cart')
                })
                .catch((error) => {
                    console.log(error);
                });
        },


    },
};
</script>