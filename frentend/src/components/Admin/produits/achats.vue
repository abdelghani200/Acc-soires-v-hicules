<!-- <template>
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title"> <span></span> All_Products_Achats</h4>
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
                        </tr>
                    </thead>
                    <tbody v-if="!loading">
                        <tr v-for="product in order.products" :key="product.id">
                            <td> {{ product.id }} </td>
                            <td> {{ product.name }} </td>
                            <td>{{ product.categorie_id }}</td>
                            <td>
                                <img class="rounded-circle" style="width: 50px; height: 50px;" :src="product.image" />
                            </td>
                            <td> {{ product.price }} </td>
                            <td> {{ product.old_price }} </td>
                            <td>{{ product.description.slice(0, 15) + '...' }}</td>
                            <td> {{ product.code_bare }} </td>
                            <td> {{ product.stock }} </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="9" class="text-center">Loading...</td>
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
            orderId: 19, // Remplacez 1 par l'ID de la commande que vous voulez récupérer
            order: {},
            loading: true,
        };
    },

    async mounted() {
        try {
            const response = await axios.get(`api/orders/${this.orderId}/products`);
            // this.order = response.data.data[0];
            this.order = response.data.data;
            console.log(this.order);
            this.loading = false;
        } catch (error) {
            console.log(error);
        }
    },
};
</script> -->




































<template>
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title"> <span></span> All_Products_Achats</h4>
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
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in order" :key="product.id">
                            <td> {{ product.id }} </td>
                            <td> {{ product.name }} </td>
                            <td>{{ product.categorie_id }}</td>
                            <td>
                                <img class="rounded-circle" style="width: 50px; height: 50px;" :src="product.image" />
                            </td>
                            <td> {{ product.price }} </td>
                            <td> {{ product.old_price }} </td>
                            <td>{{ product.description.slice(0, 15) + '...' }}</td>
                            <td> {{ product.code_bare }} </td>
                            <td> {{ product.stock }} </td>
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
            order: {},
            orderIdII: null,
            orderId: 19,
        };
    },

    async mounted() {
        // this.orderIdII = this.$route.query.orderIdII
        this.orderIdII = this.$route.params.id
        console.log( this.orderIdII);
        try {
            const response = await axios.get(`api/orders/${this.orderIdII}/produits`);
            this.order = response.data;
            console.log(this.order);
        } catch (error) {
            console.log(error);
        }
    },
};
</script> 
