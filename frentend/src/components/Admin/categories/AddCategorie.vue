<template>
  <div class="col-lg-12 grid-margin stretch-card ">
    <h4 class="card-title"> <span></span> Add_Products</h4>

    <form class="user" @submit.prevent="addCategory">
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
        <input type="file" class="form-control form-control-user" @change="onFileSelected" placeholder="Image">
      </div>
      <div class="form-group">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <input type="submit" class="btn btn-primary btn-user" value="Ajouter une categorie">
        </div>
      </div>
    </form>
  </div>
</template>





<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      description: '',
      file: null,
    }
  },
  methods: {
    addCategory() {
      // create FormData object and append the file and other data
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('description', this.description);
      formData.append('image', this.file);

      // send data to server using axios
      axios.post('/api/categories', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization':'Bearer '+localStorage.getItem('access_token')  
        }
      })
        .then(response => {
          console.log(response.data)
          // handle success response
         
        })
        .catch(error => {
          console.error(error)
          // handle error response
        })
    },
    onFileSelected(event) {
      this.file = event.target.files[0];
    },
  }
}
</script>

