<template>
  <nav class="navbar fixed-top custom-navbar">
    <a class="navbar-brand">
      <i class="fa fa-instagram fa-lg"></i>
    </a>

    <img src="@/assets/insta-logo.png" class="logo">

    <a class="navbar-brand">
      <i class="fa fa-user-plus"></i>
    </a>
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
</style>
