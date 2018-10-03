<template>
  <nav class="navbar fixed-top navbar-light bg-light">
    <a class="navbar-brand">
      <i class="fa fa-instagram"></i>
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
  height: 33px;
}
</style>
