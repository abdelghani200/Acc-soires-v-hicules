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
                    <input v-model="price" type="text" class="form-control form-control-user" placeholder="Price Product">
                </div>
                <div class="col-sm-6">
                    <input v-model="old_price" type="text" class="form-control form-control-user"
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
            <!-- <div class="form-group">
                <input v-model="productImage" type="file" class="form-control form-control-user" placeholder="Image">
            </div> -->
            <a href="#" class="btn btn-primary" @click.prevent="addProduct">Ajouter un produit</a>
        </form>
    </div>
</template>

<script>

import axios from 'axios'

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
            // productImage: ''
        }
    },
    methods: {
        addProduct() {
            if (this.name === '' || this.categorie === '' || this.price === '' || this.stock === '') {
                alert('Please fill all required fields')
                return
            }

            const productData = new FormData()
            productData.append('name', this.name)
            productData.append('category', this.categorie)
            productData.append('price', this.price)
            productData.append('oldPrice', this.old_price)
            productData.append('description', this.description)
            productData.append('qty', this.stock)
            productData.append('code', this.code_bare)
            // productData.append('image', this.productImage)

            axios.post('api/products', productData)
                .then(response => {
                    console.log(response)
                    // Show success message and clear form
                    alert('Product added successfully')
                    this.clearForm()
                })
                .catch(error => {
                    console.log(error)
                    // Show error message
                    alert('Error adding product')
                })
        },
        clearForm() {
            this.name = ''
            this.categorie = ''
            this.price = ''
            this.old_price = ''
            this.description = ''
            this.stock = ''
            this.code_bare = ''
            // this.productImage = ''
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
