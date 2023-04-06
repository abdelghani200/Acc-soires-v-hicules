<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-6">
                <img src="https://placehold.it/500x500" class="img-fluid" alt="Product Image">
            </div>
            <div class="col-md-6">
                <h1 class="h3 mb-3">Product Name</h1>
                <div class="mb-3">
                    <span class="text-warning"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                    <span class="text-muted">(10 customer reviews)</span>
                </div>
                <p class="lead mb-4">Product description goes here.</p>
                <div class="mb-3">
                    <label class="form-control" for="product-color">Color:</label>
                    <select class="form-control" id="product-color">
                        <option class="group-form" selected>Choose color</option>
                        <option  class="group-form" value="red">Red</option>
                        <option  class="group-form" value="blue">Blue</option>
                        <option  class="group-form" value="green">Green</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="product-quantity">Quantity:</label>
                    <input type="number" class="form-control" id="product-quantity" value="1" min="1" max="10">
                </div>
                <button class="btn btn-primary mb-3">Add to Cart</button>
                <div class="mb-3">
                    <label for="share" class="form-control">Share:</label>
                    <div class="btn-group" role="group" aria-label="Share Buttons">
                        <a href="#" class="btn btn-outline-secondary"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="btn btn-outline-secondary"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="#" class="btn btn-outline-secondary"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="btn btn-outline-secondary"><i class="fa-brands fa-google"></i></a>
                        <a href="#" class="btn btn-outline-secondary"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Bootstrap JS -->
</template>


<script>



</script>