<template>
    <!-- style="margin-top: 160px;" -->
    <div class="col-lg-12 grid-margin stretch-card">
        <h4 class="card-title"><span></span>Update_Products</h4>
        <form class="user" @submit.prevent="updateProduct" enctype="multipart/form-data">
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user" v-model="product.name"
                        placeholder="Name Product">
                </div>
                <div class="col-sm-6">
                    <select v-model="selectedCategory" class="form-control form-control-user"
                        placeholder="Categorie Product">
                        <option value="" disabled selected hidden>Choose a category</option>
                        <option v-for="category in categories" :key="category.id" :value="category.id" :selected="category.id === selectedCategory" >{{ category.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="number" class="form-control form-control-user" v-model="product.price"
                        placeholder="Price Product">
                </div>
                <div class="col-sm-6">
                    <input type="number" class="form-control form-control-user" v-model="product.old_price"
                        placeholder="Old Price Product">
                </div>
            </div>
            <div class="form-group">
                <textarea class="form-control form-control-user" v-model="product.description"
                    placeholder="Description"></textarea>
            </div>
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="number" class="form-control form-control-user" v-model="product.stock"
                        placeholder="stock Product">
                </div>
                <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user" v-model="product.code_bare"
                        placeholder="Barcode">
                </div>
            </div>
            <div class="form-group">
                <input type="file" class="form-control form-control-user" @change="uploadImage" ref="fileInput">
            </div>
            <div class="d-flex">
                <button type="submit" class="btn btn-primary btn-user btn-block">Update a product</button>
            </div>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            product: { name: '', description: '', price: '', old_price: '', stock: '', code_bare: '', image: null, },
            categories: [],
            selectedCategory: null, // added property
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    mounted() {
        this.getCategories();
        this.getProduct();
    },
    methods: {
        getCategories() {
            axios.get('api/categories')
                .then(response => {
                    this.categories = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        getProduct() {
            console.log(this.id);
            axios.get('api/products/' + this.id)
                .then(response => {
                    this.product = response.data.data;
                    console.log(this.product);
                    console.log(this.product.category);
                    this.product.image = response.data.image;
                    console.log(this.product.image);
                    // this.selectedCategory = this.product.find(category => category.id === this.product.categorie_id);
                    const selectedCategory = this.product.category_id
                    console.log(selectedCategory);
                })
                .catch(error => {
                    console.log(error);
                })
        },

        uploadImage(event) {
            this.loading = true;
            let file = event.target.files[0];
            let formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'tduoyf0g');
            axios.post('https://api.cloudinary.com/v1_1/dnlsbze2k/upload', formData, {
                withCredentials: false,
            })
                .then(response => {
                    // this.loading = false;
                    this.product.image = response.data.secure_url;
                    console.log(this.image)
                })
                .catch(error => {
                    console.log(error)
                })
        },

        updateProduct() {
            const productId = this.$route.params.id;
            console.log(this.selectedCategory)
            // axios.put('api/products/' + productId, this.product,{
            axios.put(`api/products/${productId}`, {
                ...this.product, image: this.product.image,
                categorie_id: this.selectedCategory
            })
                .then(response => {
                    console.log(1);
                    console.log(response);
                    console.log(response.data);
                    console.log(response.data.data);
                    console.log(1);
                    // redirect to the product page after successful update
                    this.$router.push('/produits')

                    Swal.fire({
                        icon: 'success',
                        title: 'Product updated successfully',
                        text: 'Your product has been updated successfully!',
                        showConfirmButton: false,
                        timer: 1500

                    })

                })
        },
        

    }
}
</script>
  