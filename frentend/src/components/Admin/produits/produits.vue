<template>
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title"> <span></span> All_Products</h4>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th> # </th>
                            <th> Name </th>
                            <th> Categorie </th>
                            <th> Image </th>
                            <th> Price </th>
                            <th> Old price </th>
                            <th> Description </th>
                            <th> Code bare </th>
                            <th> Stock </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="produit in paginatedProduits" :key="produit.id">
                            <td> {{ produit.id }} </td>
                            <td> {{ produit.name }} </td>
                            <td>{{ produit.category }}</td>
                            <td>
                                <!-- <img class="rounded-circle" style="width: 50px; height: 50px;" :src="produit.image" /> -->
                                <img :src="produit.image" alt="{{ produit.image }}">
                            </td>
                            <td> {{ produit.price }} </td>
                            <td> {{ produit.old_price }} </td>
                            <td>{{ produit.description.slice(0, 15) + '...' }}</td>
                            <td> {{ produit.code_bare }} </td>
                            <td> {{ produit.stock }} </td>
                            <td class="d-flex">
                                <button @click="deleteProduct(produit.id)" class="btn btn-danger"
                                    style="margin-right: 6px;"><i class="fa-sharp fa-solid fa-trash"></i></button>
                                <button @click="updateProduct(produit.id)" class="btn btn-warning"> <i
                                        class="fa-solid fa-pen-to-square"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="d-flex justify-content-center">
                <ul class="pagination">
                    <li class="page-item" v-if="currentPage > 1">
                        <button class="page-link" @click="currentPage--">Previous</button>
                    </li>
                    <li class="page-item" v-for="page in pages" :key="page" :class="[page == currentPage ? 'active' : '']">
                        <button class="page-link" @click="currentPage = page">{{ page }}</button>
                    </li>
                    <li class="page-item" v-if="currentPage < totalPages">
                        <button class="page-link" @click="currentPage++">Next</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script>

import axios from 'axios';
import Swal from 'sweetalert2';
// import VuePaginator from 'vuejs-paginator';


export default {
    data() {
        return {
            produits: [],
            currentPage: 1,
            itemsPerPage: 5,
        };
    },

    computed: {
        paginatedProduits() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.produits.slice(startIndex, startIndex + this.itemsPerPage);
        },
        totalPages() {
            return Math.ceil(this.produits.length / this.itemsPerPage);
        },
        pages() {
            const pagesArray = [];
            for (let i = 1; i <= this.totalPages; i++) {
                pagesArray.push(i);
            }
            return pagesArray;
        },
    },

    methods: {

        getProducts() {
            axios
                .get('/api/products')
                .then(response => {
                    this.produits = response.data.data;
                    console.log(response);
                    console.log(this.produits);
                })
                .catch(error => {
                    console.log(error);
                });
        },

        deleteProduct(productId) {
            axios
                .delete(`/api/products/${productId}`, {

                })
                .then(response => {
                    console.log(response);
                    console.log('Product deleted successfully');
                    this.getProducts();

                    Swal.fire({
                        icon: 'success',
                        title: 'Product delete successfully',
                        text: 'Your product has been deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500

                    })
                })
                .catch(error => {
                    console.log(error);
                });
        },

        updateProduct(productId) {
            this.$router.push({ name: 'updateProduct', params: { id: productId } });
            axios.
                put(`/api/products/${productId}`)
                .then(response => {
                    console.log(response);
                    console.log('rrer');
                    this.getProducts();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },

    created() {
        this.getProducts()
    }
};
</script>
  