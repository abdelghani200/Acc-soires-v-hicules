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
                <input type="file" class="form-control form-control-user" id="image" @change="uploadImage">
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
            category: { name: '', description: '', image: null },
            // image: null
        }
    },

    props: {
        id: {
            type: Number,
            required: true
        }
    },
    mounted() {
        this.getCategory()
    },

    methods: {

        getCategory() {
            axios.get(`api/categories/${this.id}`)
                .then(response => {
                    this.category = response.data
                    this.category.image = response.data.image;
                    console.log(this.category.image);
                })
                .catch(error => {
                    console.log(error)
                })
        },

        uploadImage(event) {
            this.loading = true;
            let file = event.target.files[0];
            let formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'tduoyf0g');
            axios.post('https://api.cloudinary.com/v1_1/dnlsbze2k/upload', formData, {
                withCredentials: false,
            })
                .then(response => {
                    // this.loading = false;
                    this.category.image = response.data.secure_url;
                    console.log(this.category.image)
                })
                .catch(error => {
                    console.log(error)
                })
        },

        updateCategory() {
            const categoryId = this.$route.params.id;
            axios.put(`api/categories/${categoryId}`, { ...this.category, image: this.category.image })
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