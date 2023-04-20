<template>
    <div class="row">
        <div class="col-md-4 stretch-card grid-margin">
            <div class="card card-img-holder text-white"
                style=" background-color: #dc3545;background-image: linear-gradient(to bottom, #dc3545 150%, #bd2130 100%);">
                <div class="card-body">
                    <i class="fas fa-chart-bar" style="color: black;"></i>
                    <h4 class="font-weight-normal mb-3">All Products <i class="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{{ data.productsCount }}</h2>
                    <!-- <h6 class="card-text">Increased by 60%</h6> -->
                </div>
            </div>
        </div>
        <div class="col-md-4 stretch-card grid-margin">
            <div class="card card-img-holder text-white"
                style="background-color: #17a2b8;background-image: linear-gradient(to bottom, #17a2b8 150%, #117a8b 100%);">
                <div class="card-body">
                    <i class="fas fa-chart-bar" style="color: black;"></i>
                    <h4 class="font-weight-normal mb-3">All Orders <i
                            class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{{ data.ordersCount }}</h2>
                    <!-- <h6 class="card-text">Decreased by 10%</h6> -->
                </div>
            </div>
        </div>
        <div class="col-md-4 stretch-card grid-margin">
            <div class="card card-img-holder text-white"
                style="background-color: #28a745;background-image: linear-gradient(to bottom, #28a745 150%, #1e7e34 80%);">
                <div class="card-body">
                    <i class="fas fa-chart-bar" style="color: black;"></i>
                    <h4 class="font-weight-normal mb-3">All Categories <i class="mdi mdi-diamond mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{{ data.categorieCount }}</h2>
                    <!-- <h6 class="card-text">Increased by 5%</h6> -->
                </div>
            </div>
        </div>
        <div class="col-md-4 stretch-card grid-margin  mt-5">
            <div class="card card-img-holder">
                <table>
                    <thead>
                        <tr>
                            <th>Catégorie</th>
                            <th>Nombre de produits</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(cat, index) in data.categoryProductsCount" :key="index">
                            <td>{{ cat.name }}</td>
                            <td class="text-center">{{ cat.nb_p }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-4 stretch-card grid-margin  mt-5">
            <div class="card card-img-holder text-white"
                style="background-color: #28a745;background-image: linear-gradient(to bottom, #94bbe9 150%, #eeaeca 80%);">
                <div class="card-body">
                    <i class="fa-solid fa-comment" style="color: black;"></i>
                    <h4 class="font-weight-normal mb-3">Comments <i class="mdi mdi-diamond mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{{ data.commentRatingsCount }}</h2>
                    <!-- <h6 class="card-text">Increased by 5%</h6> -->
                </div>
            </div>
        </div>
        <div class="col-md-4 stretch-card grid-margin  mt-5">
            <div class="card card-img-holder text-white"
                style="background-color: #28a745;background-image: linear-gradient(to bottom, #fdf72d 150%, #22c1c3 80%);">
                <div class="card-body">
                    <i class="fa-solid fa-euro-sign" style="color: black;"></i>
                    <h4 class="font-weight-normal mb-3">Tital price ($) <i class="mdi mdi-diamond mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{{ data.prixCount }}</h2>
                    <!-- <h6 class="card-text">Increased by 5%</h6> -->
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import axios from 'axios';


export default {
    name: 'Statiques',

    data() {
        return {

            data: [],

        };
    },
    methods: {

        getData() {
            axios.get('api/statistics')
                .then(response => {
                    console.log(response);
                    this.data = response.data;
                    const cat = response.data.categoryProductsCount;
                    console.log(cat);
                })
                .catch(error => {
                    console.log(error);
                });
        },

    },
    mounted() {
        this.getData()
    },
};
</script>



<style>

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tr:hover {
  background-color: #f5f5f5;
}


</style>