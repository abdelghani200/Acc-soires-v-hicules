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
                                <img class="rounded-circle" style="width: 50px; height: 50px;" :src="categorie.image" />
                            </td>
                            <td> {{ categorie.description.slice(0, 25) + '...' }} </td>
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
import Swal from 'sweetalert2';

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
        deleteCategorie(categorieId) {
            // Vérifier si la catégorie est autorisée à être supprimée
            if (categorieId > 3) {
                axios
                    .delete(`api/categories/${categorieId}`)
                    .then(response => {
                        console.log(response);
                        console.log('Categorie deleted successfully');
                        this.getCategories();

                        Swal.fire({
                            icon: 'success',
                            title: 'Categorie delete successfully',
                            text: 'Your Categorie has been deleted successfully!',
                            showConfirmButton: false,
                            timer: 1500

                        })

                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                // La catégorie ne peut pas être supprimée
                alert("Cette catégorie ne peut pas être supprimée !");
            }
        },

        updateCategorie(CategorieId) {
            this.$router.push({ name: 'UpdateCategorie', params: { id: CategorieId } });
            axios.
                put(`/api/products/${CategorieId}`)
                .then(response => {
                    console.log(response);
                    this.getCategories();

                    // Swal.fire({
                    //     icon: 'success',
                    //     title: 'Categorie update successfully',
                    //     text: 'Your Categorie has been updated successfully!',
                    //     showConfirmButton: false,
                    //     timer: 1500

                    // })

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
  