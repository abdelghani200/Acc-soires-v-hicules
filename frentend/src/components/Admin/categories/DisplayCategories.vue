<template>
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title"> <span></span> All_Categories</h4>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th> # </th>
                            <th> Name </th>
                            <th> Image </th>
                            <th> Description </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="categorie in categories" :key="categorie.id">
                            <td> {{ categorie.id }} </td>
                            <td> {{ categorie.name }} </td>
                            <td>
                                <img v-bind:src=" categorie.image ">
                                <!-- <img :src="'/storage/images/categories/' + categorie.image" alt="{{ categorie.name }}"> -->
                            </td>
                            <td> {{ categorie.description }} </td>
                            <td class="d-flex">
                                <button @click="deleteCategorie(categorie.id)" class="btn btn-danger"
                                    style="margin-right: 6px;"><i class="fa-sharp fa-solid fa-trash"></i></button>
                                <button @click="updateCategorie(categorie.id)" class="btn btn-warning"> <i
                                        class="fa-solid fa-pen-to-square"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
  
<script>

import axios from 'axios';

export default {
    data() {
        return {
            categories: [],
        };
    },

    methods: {

        getCategories() {
            axios
                .get('api/categories')
                .then(response => {
                    this.categories = response.data.data;
                    console.log(response);
                    console.log(this.categories);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        deleteCategorie(CategorieId) {
            axios
                .delete(`/api/categories/${CategorieId}`)
                .then(response => {
                    console.log(response);
                    console.log('Product deleted successfully');
                    this.getProducts();
                })
                .catch(error => {
                    console.log(error);
                });
        },

        updateCategorie(CategorieId) {
            axios.
                put(`/api/products/${CategorieId}`)
                .then(response => {
                    console.log(response);
                    this.getProducts();
                })
                .catch(error => {
                    console.log(error);
                });
        }

    },
    created() {
        this.getCategories()
    }
};
</script>
  