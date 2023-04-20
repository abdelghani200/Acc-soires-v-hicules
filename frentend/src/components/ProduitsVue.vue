<template>
    <div class="jewellery_section" style="margin-top: 160px;">
        <div class="row">
            <div class="col-lg-3">
                <div class="categories_list fixed-categories" style="height: 200px;">
                    <h3>Toutes les catégories</h3>
                    <ul>
                        <li v-for="categorie in categories" :key="categorie.id"
                            @click="filterProductsByCategory(categorie.id)">
                            {{ categorie.name }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-9">
                <div id="jewellery_main_slider" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="container">
                                <div class="fashion_section_2">
                                    <h1 class="fashion_taital"> {{ selectedCategorieName }} Accessories</h1>
                                    <div class="row">
                                        <div class="col-lg-4 col-sm-4" v-for="produit in currentProducts" :key="produit.id">
                                            <div class="box_main">
                                                <h4 class="shirt_text" style="text-transform: capitalize;">{{
                                                    produit.name
                                                }}</h4>
                                                <p class="price_text">Start Price <span style="color: #262626;">$ {{
                                                    produit.price }}</span></p>
                                                <div class="jewellery_img"><img :src="produit.image"> </div>
                                                <div class="btn_main" style="justify-content: space-between;">
                                                    <div class="buy_bt"><a href="#">Buy Now<span
                                                                style="color: aqua;"></span></a></div>
                                                    <div class="seemore_bt">
                                                        <RouterLink
                                                            :to="{ name: 'DetailProduct', params: { id: produit.id } }">
                                                            See
                                                            More</RouterLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <nav v-if="totalPages > 1">
                                            <ul class="pagination">
                                                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                                    <a class="page-link" href="#" @click.prevent="setPage(currentPage - 1)">
                                                        Previous
                                                    </a>
                                                </li>
                                                <li v-for="pageNumber in Array(totalPages).fill().map((_, index) => index + 1)"
                                                    :key="pageNumber" class="page-item"
                                                    :class="{ active: pageNumber === currentPage }">
                                                    <a class="page-link" href="#" @click.prevent="setPage(pageNumber)">
                                                        {{ pageNumber }}
                                                    </a>
                                                </li>
                                                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                                                    <a class="page-link" href="#" @click.prevent="setPage(currentPage + 1)">
                                                        Next
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
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





  
<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {

    props: {
        resultats: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            categories: [],
            produitsParCategorie: {},
            selectedCategorie: { id: null, name: 'All' },
            currentPage: 1,
            itemsPerPage: 6,
            filteredProducts: [],

        };
    },

    watch: {
        resultats(nouveauxResultats) {
            this.filteredProducts = nouveauxResultats;

        }
    },
    computed: {
        selectedCategorieName() {
            return this.selectedCategorie.name;
        },

        totalPages() {
            return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
        },
        currentProducts() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.filteredProducts.slice(startIndex, endIndex);
        },
    },
    methods: {
        async loadCategoriesAndProduits() {
            await this.getCategories();
            for (const categorie of this.categories) {
                await this.getProduitsParCategorie(categorie.id);
            }
            this.filteredProducts = Object.values(this.produitsParCategorie).flat();
        },
        async getCategories() {
            try {
                const response = await axios.get('api/categories');
                this.categories = response.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getProduitsParCategorie(categorieId) {
            try {
                const response = await axios.get(`api/categories/${categorieId}/products`);
                this.produitsParCategorie[categorieId] = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        filterProductsByCategory(categorieId) {
            if (categorieId === this.selectedCategorie.id) {
                this.filteredProducts = Object.values(this.produitsParCategorie).flat();
                this.selectedCategorie = { id: null, name: 'All' };
            } else {
                this.filteredProducts = this.produitsParCategorie[categorieId];
                this.selectedCategorie = this.categories.find((cat) => cat.id === categorieId);
                this.setPage(1);
            }
        },

        setPage(pageNumber) {
            this.currentPage = pageNumber;
            // this.filteredProducts = this.currentProducts;
            this.loadProducts();
        },
        




    },
    mounted() {
        this.loadCategoriesAndProduits();
        
    },


};
</script>


<style>


.categories_list {
  background-color: #f5f5f5;
  margin-top: 80px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.categories_list h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.categories_list ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.categories_list li {
  font-size: 14px;
  line-height: 1.5;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.categories_list li:hover {
  background-color: #e6e6e6;
}

/* .categories_list {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #f8f8f8;
  padding: 20px;
  margin-top: 300px;
} */

.fixed-categories {
  position: fixed;
  top: 160px; /* la même valeur que le margin-top de la div parent */
  left: 0;
  bottom: 0;
  overflow-y: auto; /* pour activer le scrolling vertical si nécessaire */
  width: 250px; /* ou la largeur souhaitée */
}

@media screen and (max-width: 991px) {
  .fixed-categories{
    top: 160px;
  }  
  .col-lg-3 {
    display: none; /* masquer la colonne de catégories */
  }
  .col-lg-9 {
    width: 100%; /* prendre toute la largeur de l'écran */
  }
  .box_main {
    width: 100%; /* prendre toute la largeur de la colonne */
    margin-bottom: 20px; /* ajouter une marge en bas pour l'espace */
  }
  .shirt_text {
    font-size: 16px; /* réduire la taille de la police */
  }
}




</style>