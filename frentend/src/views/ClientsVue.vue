<template>
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title"> <span></span> All_Clients</h4>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th> # </th>
                            <th> Name </th>
                            <th> Email </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td> {{ user.id }} </td>
                            <td> {{ user.name }} </td>
                            <td> {{ user.email }} </td>
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
            users: [],
        };
    },

    methods: {

        getClients() {
            axios
                .get('api/users', )
                .then(response => {
                    this.users = response.data.users;
                    console.log(response);
                    
                })
                .catch(error => {
                    console.log(error);
                });
        },

    },
    created() {
        this.getClients()
    }
};
</script>
  