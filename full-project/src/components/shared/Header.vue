<template>
  <nav class="navbar fixed-top custom-navbar">
    <router-link to="/" class="navbar-brand ">
      <i class="fa fa-instagram fa-lg toolbar-icon"></i>
    </router-link>

    <img src="@/assets/insta-logo.png" class="logo">

    <router-link to="discover-people" class="navbar-brand">
      <i class="fa fa-user-plus toolbar-icon"></i>
    </router-link>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
.logo {
  height: 40px;
}
.custom-navbar {
  max-height: 45px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.toolbar-icon, .toolbar-icon:active {
  color: black;
}
</style>
