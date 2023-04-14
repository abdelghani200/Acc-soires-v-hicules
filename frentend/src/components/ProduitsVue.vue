<template>
    <div class="jewellery_section" style="margin-top: 160px;">
        <div class="row">
            <div class="col-lg-3">
                <div class="categories_list">
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
                                        <div class="col-lg-4 col-sm-4" v-for="produit in filteredProducts"
                                            :key="produit.id">
                                            <div class="box_main">
                                                <h4 class="shirt_text" style="text-transform: capitalize;">{{ produit.name
                                                }}</h4>
                                                <p class="price_text">Start Price <span style="color: #262626;">$ {{
                                                    produit.price }}</span></p>
                                                <div class="jewellery_img"><img src="../../public/images/v_1.jpg"> </div>
                                                <div class="btn_main" style="justify-content: space-between;">
                                                    <div class="buy_bt"><a href="#">Buy Now<span
                                                                style="color: aqua;"></span></a></div>
                                                    <div class="seemore_bt">
                                                        <RouterLink
                                                            :to="{ name: 'DetailProduct', params: { id: produit.id } }"> See
                                                            More</RouterLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
export default {
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
    computed: {
        selectedCategorieName() {
            return this.selectedCategorie.name;
        }
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
            }
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


</style>