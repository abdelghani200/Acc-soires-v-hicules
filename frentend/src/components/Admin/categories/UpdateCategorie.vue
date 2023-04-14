<template>
    <div class="col-lg-12 grid-margin stretch-card">
        <h4 class="card-title"><span></span>Update_Products</h4>
        <form class="user" @submit.prevent="updateCategory">
            <div class="form-group">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user" v-model="category.name">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user" v-model="category.description">
                </div>
            </div>
            <div class="form-group">
                <input type="file" class="form-control form-control-user" id="image" @change="onImageChange">
            </div>
            <div class="form-group">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <button type="submit" class="btn btn-primary btn-user">Mettre à jour</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'


export default {

    data() {
        return {
            category: { name: '', description: '' },
            image: null
        }
    },

    props: {
        id: {
            type: Number,
            required: true
        }
    },
    mounted() {
        this.getCategories()
    },

    methods: {

        getCategories() {

            axios.get(`api/categories/${this.id}`)
                .then(response => {
                    this.category = response.data
                    console.log(this.category);
                }).catch(error => {
                    console.log(error)
                })

        },
        onImageChange(event) {
            this.image = event.target.files[0];
        },

        updateCategory() {
            const categoryId = this.$route.params.id;
            axios.put(`api/categories/${categoryId}`, this.category)
                .then(response => {
                    console.log(response.data);
                    this.$router.push('/DisplayCategories')
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>
  
  
  