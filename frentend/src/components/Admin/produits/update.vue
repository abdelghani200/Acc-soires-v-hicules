<template>
    <div class="col-lg-12 grid-margin stretch-card">
        <h4 class="card-title"> <span></span> Add_Products</h4>
        <form class="user" action="">
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user"  placeholder="Name Product">
                </div>
                <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user" placeholder="Categorie Product">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user" placeholder="Price Product">
                </div>
                <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user" placeholder="Old Price Product">
                </div>
            </div>
            <div class="form-group">
                <input type="email" class="form-control form-control-user" placeholder="Description">
            </div>
            <div class="form-group row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="number" class="form-control form-control-user" id="exampleInputPassword"
                        placeholder="Qty Product">
                </div>
                <div class="col-sm-6">
                    <input type="texte" class="form-control form-control-user" id="exampleRepeatPassword"
                        placeholder="Code bare">
                </div>
            </div>
            <div class="form-group">
                <input type="file" class="form-control form-control-user" placeholder="Image">
            </div>
            <div class="d-flex">
                <a href="#" class="btn btn-primary btn-user btn-block">
                    Update un produit </a>
            </div>

        </form>
    </div>
</template>