<template>
  <div>
    <Navbar />
    <!-- <router-view /> -->
   <!-- <Dashboard  />  -->
      <!-- v-if="isConnected" -->
    <Footer />
    <add/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Product from './components/Product.vue';
import add from './components/Admin/produits/add.vue';
import Dashboard from './views/Dashboard.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Product,
    Dashboard
}
}
</script>

<style>
/* styles pour le composant App.vue */
</style>
