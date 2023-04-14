<template>
  <div>
    <!-- <Navbar /> -->
    <!-- <RouterView /> -->
    <Dashboard/>
    <!-- <add/> -->
    <!-- <Update/> -->
    <!-- <Footer/> -->
  </div>
</template>

<script>
// import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Product from './components/Product.vue';
import Dashboard from './views/Dashboard.vue';




export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Product,
    Dashboard,
    
}
}
</script>

<style>
/* styles pour le composant App.vue */
</style>
