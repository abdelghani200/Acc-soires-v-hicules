<template>
    <div class="container-fluid">
        <div class="row">
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                <div class="sidebar-sticky" id="navbarSupportedContent">
                    <img src="../../../public/1.png" alt="Logo" class="img-fluid mb-3">
                    <ul class="nav flex-column">

                        <li class="nav-item dropdown">
                            <router-link to="/statiques" class="nav-link" active-class="active"><i class="fas fa-chart-line"
                                    style="color: gray;"></i>
                                Dashboard</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link to="/order" class="nav-link" active-class="active"><i class="fas fa-clipboard-list"
                                    style="color: gray;"></i>
                                Orders</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-box"></i>
                                Products
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <router-link to="/produits" class="dropdown-item">List Products</router-link>
                                <router-link to="/add" class="dropdown-item">Add Product</router-link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-tags"></i>
                                Categories
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <router-link to="/DisplayCategories" class="dropdown-item">List Categories</router-link>
                                <router-link to="/addCategorie" class="dropdown-item">Add Categorie</router-link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <RouterLink class="nav-link" to="/clients"><i class="fas fa-users" style="color: gray;"></i>
                                Clients</RouterLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Accésoires Véhicules</h1>
                    <div class="btn-group">
                        <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="fa-solid fa-user"></i> Admin
                        </button>
                        <div class="dropdown-menu">
                            <!-- <a class="dropdown-item" href="#">Profile</a>
                            <a class="dropdown-item" href="#">Settings</a> -->
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" @click.prevent="logout">Logout</a>
                        </div>
                    </div>
                </div>
                <div class="page-header">
                    <h3 class="page-title">
                        <span class="page-title-icon bg-gradient-primary text-info me-2">
                            <i class="fas fa-tachometer-alt"></i>
                        </span> Dashboard
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item active" aria-current="page">
                                <span></span>Overview <i
                                    class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                            </li>
                        </ul>
                    </nav>
                </div>
                <RouterView />
            </main>
        </div>
    </div>
</template>


<script>

export default {

    data() {

        return {

        };
    },

    methods: {

        logout() {
            localStorage.removeItem('access_token')
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('user_id')
            localStorage.removeItem('RoleUser')
            this.isAuthenticated = false
            this.$router.push('/Login')
        }

    }

}

</script>

