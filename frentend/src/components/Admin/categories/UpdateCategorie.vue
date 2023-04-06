<template>
    <form class="user" @submit.prevent="updateCategory">
        <div class="form-group">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <input type="text" class="form-control form-control-user" v-model="name" placeholder="Name">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <input type="text" class="form-control form-control-user" v-model="description" placeholder="Description">
            </div>
        </div>
        <div class="form-group">
            <input type="file" class="form-control form-control-user" ref="image" placeholder="Image">
        </div>
        <div class="form-group">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <input type="submit" class="btn btn-primary btn-user" value="Mettre à jour">
            </div>
        </div>
    </form>
</template>
<script>
export default {
    props: ['categoryId', 'categoryName', 'categoryDescription'],

    data() {
        return {
            name: this.categoryName,
            description: this.categoryDescription,
            image: null
        }
    },

    methods: {
        updateCategory() {
            // récupérer les données de formulaire
            let formData = new FormData()
            formData.append('name', this.name)
            formData.append('description', this.description)
            formData.append('image', this.$refs.image.files[0])

            // effectuer une requête POST pour mettre à jour la catégorie
            axios.post(`/categories/${this.categoryId}?_method=PUT`, formData)
                .then(response => {
                    // rediriger l'utilisateur vers la page des catégories
                    this.$router.push({ name: 'categories' })
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
  
  
  