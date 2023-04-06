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
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/DisplayCategories"><i class="fas fa-tags"
                                    style="color: gray;"></i> Categories</RouterLink>
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
                <!-- <div class="row">
                    <div class="col-md-4 stretch-card grid-margin">
                        <div class="card card-img-holder text-white"
                            style=" background-color: #dc3545;background-image: linear-gradient(to bottom, #dc3545 150%, #bd2130 100%);">
                            <div class="card-body">
                                <i class="fas fa-chart-bar" style="color: black;"></i>
                                <h4 class="font-weight-normal mb-3">Weekly Sales <i
                                        class="mdi mdi-chart-line mdi-24px float-right"></i>
                                </h4>
                                <h2 class="mb-5">$ 15,0000</h2>
                                <h6 class="card-text">Increased by 60%</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 stretch-card grid-margin">
                        <div class="card card-img-holder text-white"
                            style="background-color: #17a2b8;background-image: linear-gradient(to bottom, #17a2b8 150%, #117a8b 100%);">
                            <div class="card-body">
                                <i class="fas fa-chart-bar" style="color: black;"></i>
                                <h4 class="font-weight-normal mb-3">Weekly Orders <i
                                        class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                                </h4>
                                <h2 class="mb-5">45,6334</h2>
                                <h6 class="card-text">Decreased by 10%</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 stretch-card grid-margin">
                        <div class="card card-img-holder text-white"
                            style="background-color: #28a745;background-image: linear-gradient(to bottom, #28a745 150%, #1e7e34 80%);">
                            <div class="card-body">
                                <i class="fas fa-chart-bar" style="color: black;"></i>
                                <h4 class="font-weight-normal mb-3">Visitors Online <i
                                        class="mdi mdi-diamond mdi-24px float-right"></i>
                                </h4>
                                <h2 class="mb-5">95,5741</h2>
                                <h6 class="card-text">Increased by 5%</h6>
                            </div>
                        </div>
                    </div>
                </div> -->
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