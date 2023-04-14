<template>
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title"> <span></span> All_Orders</h4>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th> # </th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Produits</th>
                            <th>Validation</th>
                            <th>Delevration</th>
                            <th class="text-center"> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="order in orders" :key="order.id">
                            <td> {{ order.id }} </td>
                            <td>{{ order.statut }}</td>
                            <td>{{ order.total }}</td>
                            <td>{{ order.total_products }}</td>
                            <td>{{ order.time_validation }}</td>
                            <td>{{ order.time_delevration }}</td>
                            <td class="d-flex">
                                <button @click="deleteOrders(order.id)" class="btn btn-danger" style="margin-right: 6px;"><i
                                        class="fa-sharp fa-solid fa-trash"></i></button>
                                <button @click="archevedOrders(order.id)" class="btn btn-Secondary" title="archiver"
                                    style="margin-right: 6px;"><i class="fa-solid fa-box-archive"></i></button>
                                <button @click="deliverOrder(order.id)" class="btn btn-primary" title="delivry"
                                    style="margin-right: 6px;"> <i class="fa-solid fa-truck"></i></button>
                                <button @click="validateOrder(order.id)" class="btn btn-info" title="valider"><i
                                        class="fa-solid fa-check"></i></button>
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
// import VuePaginator from 'vuejs-paginator';


export default {
    data() {
        return {
            orders: [],
            currentPage: 1,
            itemsPerPage: 5,
        };
    },

    methods: {

        getOrders() {
            axios
                .get('api/orders')
                .then(response => {
                    this.orders = response.data.data;
                    console.log(response);
                    console.log(this.orders);
                })
                .catch(error => {
                    console.log(error);
                });
        },

        deleteOrders(orderId) {
            axios
                .delete(`/api/orders/${orderId}`, {

                })
                .then(response => {
                    console.log(response);
                    console.log('Order deleted successfully');
                    this.getOrders();

                    Swal.fire({
                        icon: 'success',
                        title: 'Order delete successfully',
                        text: 'Your Order has been deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500

                    })
                })
                .catch(error => {
                    console.log(error);
                });
        },

        archevedOrders(orderId) {
            axios
                .put(`/api/orders/${orderId}`, {
                    statut: 'archived'
                })
                .then(response => {
                    console.log(response);
                    console.log('Order archived successfully');
                    this.getOrders();

                    Swal.fire({
                        icon: 'success',
                        title: 'Order archived successfully',
                        text: 'Your Order has been archived successfully!',
                        showConfirmButton: false,
                        timer: 1500

                    })
                })
                .catch(error => {
                    console.log(error);
                });
        },
        validateOrder(orderId) {
            axios.put(`api/orders/${orderId}`, { statut: 'validated' })
                .then(response => {
                    console.log(response);
                    console.log('Order validated successfully');
                    this.getOrders();
                    Swal.fire({
                        icon: 'success',
                        title: 'Order validated successfully',
                        text: 'Your Order has been validated successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(error => {
                    console.log(error);
                });
        },
        deliverOrder(orderId) {
            axios.put(`/api/orders/${orderId}`, { statut: 'delivered' })
                .then(response => {
                    console.log(response);
                    console.log('Order delivered successfully');
                    this.getOrders();
                    Swal.fire({
                        icon: 'success',
                        title: 'Order delivered successfully',
                        text: 'Your Order has been delivered successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(error => {
                    console.log(error);
                });
        }

    },

    created() {
        this.getOrders()
    }
};
</script>
  