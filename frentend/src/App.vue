<script>

import { RouterLink } from 'vue-router';

import Navbar from './components/Navbar.vue'

import Footer from './components/Footer.vue'

import Product from './components/Product.vue'

import Dashboard from './components/Admin/Dashboard.vue';


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

<template>
  <!-- <navbar></navbar> -->
  <!-- <Product/> -->
  <Dashboard/>
  <!-- <Footer/> -->
  
</template>

<style>

</style>
