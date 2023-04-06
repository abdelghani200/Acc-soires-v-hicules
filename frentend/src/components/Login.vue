    
<script>

import axios from 'axios';

export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
            showLoginModal: false,
            showModal: false,
        }
    },
    methods: {

        async loginAdmin() {
            try {
                const response = await axios.post('/api/login', {
                    email: this.email,
                    password: this.password
                });

                console.log(response.data);
                this.isLoggedIn = true
                // if (response.data.status === 200) {
                //     alert('success');
                // } else {
                //     alert('error');
                // }

                this.$router.push('/Dashboard');


            } catch (error) {
                alert('error');
            }
        },
        hideLoginModal() {
            this.showModal = false
        },
    }
};
</script>


    
<template>
    <!-- Outer Row -->
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
                                    <button type="submit" class="btn btn-primary btn-user btn-block">
                                        Login
                                    </button>
                                    <!-- <hr>
                                    <a href="" class="btn btn-google btn-user btn-block">
                                        <i class="fab fa-google fa-fw"></i> Login with Google
                                    </a>
                                    <a href="" class="btn btn-facebook btn-user btn-block">
                                        <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                    </a> -->
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
</template>



<style>
.modal {
  display: block;
  position: fixed;
  margin-top: 6%;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 95%;
  background-color: rgba(0,0,0,0.4);
}

/* margin: 15% auto; */
.modal-content {
  background-color: #fefefe;
  margin-top: 4%;
  padding: 30px;
  border: 1px solid #888;
  width: 80%;
  height: 90%;
  margin-left: 10%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
