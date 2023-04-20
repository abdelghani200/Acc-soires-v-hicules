<template>
    <div class="container" style="margin-top: 120px;">
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-5 d-none d-lg-block bg-register-image">
                                <img src="../../public/1.png" />
                            </div>
                            <div class="col-lg-7">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form class="user" @submit.prevent="register">
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" class="form-control form-control-user"
                                                    placeholder="First Name" v-model="name" />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control form-control-user"
                                                    placeholder="Last Name" v-model="lastName" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                placeholder="Email Address" v-model="email" />
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" class="form-control form-control-user"
                                                    placeholder="Your ville" v-model="ville" />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control form-control-user"
                                                    placeholder="Your Adress" v-model="address" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-user"
                                                placeholder="Your Telephone" v-model="numTele" />
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" class="form-control form-control-user" id="password"
                                                    placeholder="Password" v-model="password" />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="password" class="form-control form-control-user"
                                                    id="password_confirmation" placeholder="Repeat Password"
                                                    v-model="password_confirmation" />
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-user btn-block">
                                            Register Account
                                        </button>
                                    </form>
                                    <hr />
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <router-link class="small" to="/login">Already have an account? Login!</router-link>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  


<script>

import axios from 'axios';


export default {
    data() {
        return {
            name: "",
            lastName: "",
            email: "",
            ville: "",
            address: "",
            numTele: "",
            password: "",
            password_confirmation: "",
            messageError:""
        };
    },

    methods: {
        register() {
            axios.post('api/register', {
                name: this.name,
                lastName: this.lastName,
                email: this.email,
                ville: this.ville,
                address: this.address,
                numTele: this.numTele,
                password: this.password,
                password_confirmation: this.password_confirmation,
            }).then(response => {
                console.log(response);
                // rediriger l'utilisateur vers la page de connexion
                this.$router.push('/login');
            }).catch(error => {
                // afficher un message d'erreur si la création de compte a échoué
                console.log(error);
                // messageError = swite('Account creation failed. Please try again later.');
                alert('Account creation failed. Please try again later.');
                
            });
        },
    },
};
</script>

