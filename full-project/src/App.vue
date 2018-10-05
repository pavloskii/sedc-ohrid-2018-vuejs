<template>
  <div>
    <navigation-bar v-if="isAuth"></navigation-bar>
    <router-view></router-view>
    <app-footer v-if="isAuth"></app-footer>
  </div>
</template>

<script>
import NavigationBar from "./components/shared/NavigationBar";
import Footer from "./components/shared/Footer";

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
  padding-top: 55px;
  padding-bottom: 55px;
}
</style>
