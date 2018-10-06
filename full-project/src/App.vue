<template>
  <div>
    <app-header v-if="isAuth"></app-header>
    <router-view></router-view>
    <app-footer v-if="isAuth"></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

export default {
  components: {
    "app-header":Header,
    "app-footer": Footer
  },
  computed: {
    isAuth() {
      return this.$store.getters.isUserAuthenticated;
    }
  }
};
</script>

<style>
body {
  padding-top: 45px;
  padding-bottom: 45px;
  background-color: #FAFAFA;
}
</style>
