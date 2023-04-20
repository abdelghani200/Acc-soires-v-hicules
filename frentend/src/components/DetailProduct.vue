<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-6" style="margin-top: 115px;">
                <!-- <img src="https://placehold.it/500x500" class="img-fluid" alt="Product Image"> -->
                <img :src="product.image" class="img-fluid" alt="Product Image" style="    width: 500px;
    height: 500px;">
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

        <!-- Comment section -->
        <div class="mb-3">
            <h4 class="mb-3">Leave a review</h4>
            <form>
                <div class="mb-3">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" v-model="userName">
                </div>
                <div class="mb-3">
                    <label for="rating">Rating:</label>
                    <select class="form-control" id="rating" v-model="userRating">
                        <option value="" disabled>Select rating</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Star</option>
                        <option value="3">3 Star</option>
                        <option value="4">4 Star</option>
                        <option value="5">5 Star</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="comment">Comment:</label>
                    <textarea class="form-control" id="comment" rows="3" v-model="userComment"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="addReview">Submit</button>
            </form>

            <!-- Display comments and ratings -->
            <div class="mt-5">
                <h4 class="mb-3">Customer Reviews</h4>
                <div v-for="(review, index) in reviews" :key="index" class="mb-3">
                    <div class="d-flex justify-content-between mb-2">
                        <span class="fw-bold">{{ review.customer }}</span>
                        <span class="text-muted">{{ review.created_at_formatted }}</span>
                    </div>
                    <div class="mb-2">
                        <span class="text-warning">
                            <template v-for="i in review.star">
                                <i class="fa-solid fa-star"></i>
                            </template>
                        </span>
                    </div>
                    <p>{{ review.body }}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
    name: 'DetailProduct',
    data() {
        return {
            product: [],
            reviews: [],
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

        this.getReviews();

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

        addReview()
        {
            const productId = this.$route.params.id;

            axios.post(`api/products/${productId}/reviews`,{
                customer: this.userName,
                star: this.userRating,
                review: this.userComment,
            })
                .then((response) => {
                    console.log(response.data);
                    this.getReviews();
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        getReviews() {
            const productId = this.$route.params.id;

            axios.get(`api/products/${productId}/reviews`)
                .then((response) => {
                    this.reviews = response.data.data.map((review) => {
                        review.created_at_formatted = moment(review.created_at).format('YYYY-MM-DD HH:mm:ss');
                        return review;
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }



    },
};
</script>