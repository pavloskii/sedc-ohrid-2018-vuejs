<template>
  <div>
    <navigation-bar v-if="isAuth"></navigation-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";

export default {
  components: {
    NavigationBar
  },
  computed: {
    isAuth() {
      return this.$store.getters.isUserAuthenticated;
    }
  }
};
</script>

<style>
</style>
