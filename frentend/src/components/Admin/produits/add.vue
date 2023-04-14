<template>
    <div class="col-lg-12 grid-margin stretch-card">
        <h4 class="card-title"> <span></span> Add_Products</h4>
        <form class="user" action="">
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input v-model="name" type="text" class="form-control form-control-user" placeholder="Name Product">
                </div>
                <div class="col-sm-6">
                    <select v-model="categorie" type="text" class="form-control form-control-user"
                        placeholder="Categorie Product">
                        <option value="" disabled selected hidden>Choose a category</option>
                        <option v-for="category in categories" :value="category">{{ category.name }}</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input v-model="price" type="number" class="form-control form-control-user" placeholder="Price Product">
                </div>
                <div class="col-sm-6">
                    <input v-model="old_price" type="number" class="form-control form-control-user"
                        placeholder="Old Price Product">
                </div>
            </div>
            <div class="form-group">
                <input v-model="description" type="email" class="form-control form-control-user" placeholder="Description">
            </div>
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input v-model="stock" type="number" class="form-control form-control-user" id="exampleInputPassword"
                        placeholder="Qty Product">
                </div>
                <div class="col-sm-6">
                    <input v-model="code_bare" type="texte" class="form-control form-control-user"
                        id="exampleRepeatPassword" placeholder="Code bare">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input v-model="discount" type="number" class="form-control form-control-user"
                        id="exampleRepeatPassword" placeholder="discount">
                </div>
                <div class="col-sm-6">
                    <input type="file" class="form-control form-control-user" placeholder="Image" @change="onFileSelected">
                </div>
            </div>
            <a href="#" class="btn btn-primary" @click.prevent="addProduct">Ajouter un produit</a>
        </form>
    </div>
</template>

<script>

import axios from 'axios'
import Swal from 'sweetalert2';


export default {
    data() {
        return {
            categories: [],
            name: '',
            categorie: '',
            price: '',
            old_price: '',
            description: '',
            stock: '',
            code_bare: '',
            discount: '',
            image: null
        }
    },
    methods: {
        addProduct() {
            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('categorie_id', this.categorie.id);
            formData.append('price', this.price);
            formData.append('old_price', this.old_price);
            formData.append('description', this.description);
            formData.append('stock', this.stock);
            formData.append('code_bare', this.code_bare);
            formData.append('discount', this.discount);
            formData.append('image', this.image);

            axios.post('api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log(response)
                    this.$router.push('/produits')

                    // display success message using switch alert
                    Swal.fire({
                        icon: 'success',
                        title: 'Created!',
                        text: 'Your product has been created successfully.',
                        timer: 4000,
                        showConfirmButton: false
                    })
                })
                .catch(error => {
                    console.log(error.response.data);
                })
        },

        onFileSelected(event) {
            this.image = event.target.files[0]
            console.log(this.image);
        },
        getCategories() {
            axios.get('/api/categories')
                .then(response => {
                    this.categories = response.data.data
                    console.log(this.categories);
                })
                .catch(error => {
                    console.log(error)
                })
        }

    },
    mounted() {
        this.getCategories()
    }
}
</script>
