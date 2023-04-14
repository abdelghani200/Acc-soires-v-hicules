<template>
    <div class="container-fluid">
        <div class="row">
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                <div class="sidebar-sticky" id="navbarSupportedContent">
                    <img src="../../../public/1.png" alt="Logo" class="img-fluid mb-3">
                    <ul class="nav flex-column">

                        <li class="nav-item">
                            <RouterLink class="nav-link" active-class="active" to="/statiques"><i class="fas fa-chart-line"
                                    style="color: gray;"></i>
                                Dashboard</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/order" class="nav-link" active-class="active"><i class="fas fa-clipboard-list"
                                    style="color: gray;"></i>
                                Orders</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/produits"><i class="fas fa-box" style="color: gray;"></i>
                                Products</RouterLink>
                            <RouterLink class="nav-link" to="/add"><i class="fas fa-box" style="color: gray;"></i>
                                AddProduct</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/DisplayCategories"><i class="fas fa-tags"
                                    style="color: gray;"></i> Categories</RouterLink>
                            <RouterLink class="nav-link" to="/addCategorie"><i class="fas fa-tags"
                                    style="color: gray;"></i> AddCategorie</RouterLink>
                        </li>
                        <li class="nav-item">
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
                            <a class="dropdown-item" href="#">Profile</a>
                            <a class="dropdown-item" href="#">Settings</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Logout</a>
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

}

</script>