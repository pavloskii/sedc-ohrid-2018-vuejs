<template>
  <nav class="navbar fixed-top navbar-light bg-light">
    <router-link to="/" class="navbar-brand"><i class="fa fa-instagram"></i></router-link>
    <divider />
    
    <img src="@/assets/logo-gram.png" height="30" @click="goToTop">

    <divider />
    <router-link to="/discover-people" class="navbar-brand"><i class="fa fa-user-plus"></i></router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [{ name: "Home", path: "/" }]
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    goToTop(){
      document.body.scrollTop = 0;
    }
  }
};
</script>

<style>
</style>
