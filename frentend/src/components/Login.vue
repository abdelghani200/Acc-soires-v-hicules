    
<script>

import axios from 'axios';

export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
            isAuthenticated: false
        }
    },
    methods: {

        async loginAdmin() {
            try {
                const response = await axios.post('api/login', {
                    email: this.email,
                    password: this.password
                });

                console.log(response.data);
                const { token, redirect_url } = response.data;
                const userId = response.data.data.user_id;
                const role   = response.data.data.role
                console.log(role);
                console.log(userId);
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem('access_token', token);
                localStorage.setItem('user_id', userId);
                if(role == 'admin'){
                    localStorage.setItem("RoleUser", 'Admin');
                }
                if(role == 'user'){
                    localStorage.setItem("RoleUser", 'User');
                }

                this.$router.push(redirect_url);
                // window.location.href = redirect_url;


            } catch (error) {
                alert('error');
            }
        },
    }
};
</script>


    
<template>
    <!-- Outer Row -->

    <div style="margin-top: 130px;">
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"><img src="../../public/1.png">
                            </div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <div v-if="errorMessage && errorMessage.trim()" class="alert alert-danger" role="alert">
                                        {{ errorMessage }}
                                    </div>
                                    <form class="user" @submit.prevent="loginAdmin">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user" v-model="email"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address...">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user" v-model="password"
                                                id="exampleInputPassword" placeholder="Password">
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-user btn-block" v-on="refreshPage">
                                            Login
                                        </button>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="#">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <RouterLink class="small" to="/Register">Create an Account!</RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

