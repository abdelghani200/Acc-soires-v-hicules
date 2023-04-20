<template>
  <div>
    <Navbar v-if="!isAdminLoggedIn" />
    <Dashboard v-if="isAdminLoggedIn"  @logout="onLogout"/>
    <div>
      <RouterView v-if="!isAdminLoggedIn" />
    </div>
    <Footer />
  </div>
</template>

<script>

import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Dashboard from './views/Dashboard.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Dashboard,
    RouterView,
    Footer,
  },
  data() {
    return {
      isAdminLoggedIn: false
    }
  },
  created() {
    this.isAdminLoggedIn = localStorage.getItem('RoleUser') === 'Admin';
  },
  methods: {
    onLogout() {
      this.isAdminLoggedIn = false;
    }
  }
}

</script>
