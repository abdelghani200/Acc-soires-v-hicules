<template>
    <div class="container">
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
                                                    placeholder="First Name" v-model="firstName" />
                                                <span v-if="!firstName" class="text-danger">Please enter your first
                                                    name</span>
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
                                                <input type="password" class="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" v-model="password" />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="password" class="form-control form-control-user"
                                                    id="exampleRepeatPassword" placeholder="Repeat Password"
                                                    v-model="repeatPassword" />
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-user btn-block">
                                            Register Account
                                        </button>
                                        <hr />
                                        <button class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Register with Google
                                        </button>
                                        <button class="btn btn-facebook btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Register with
                                            Facebook
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



export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repeatPassword: "",
        };
    },

    methods: {
        register() {
            // Perform form validation
            if (this.firstName === "") {
                alert("Please enter your first name.");
                return;
            }
            if (this.lastName === "") {
                alert("Please enter your last name.");
                return;
            }
            if (this.email === "") {
                alert("Please enter your email address.");
                return;
            }
            if (this.password === "") {
                alert("Please enter a password.");
                return;
            }
            if (this.repeatPassword === "") {
                alert("Please repeat your password.");
                return;
            }
            if (this.password !== this.repeatPassword) {
                alert("Passwords do not match.");
                return;
            }
            // Perform registration logic
            alert("Registration successful!");
        },
    },
};
</script>

