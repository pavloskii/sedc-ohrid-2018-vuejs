<template>
  <div>
    <navigation-bar v-if="isAuth"></navigation-bar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

export default {
  components: {
    NavigationBar,
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
  padding-bottom: 55px;
  padding-top: 55px;
}
</style>
