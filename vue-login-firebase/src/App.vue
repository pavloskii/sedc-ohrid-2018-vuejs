<template>
  <div class="app">
    <top-nav-bar v-if="isAuthenticated"></top-nav-bar>
    <router-view/>
  </div>
</template>

<script>
import TopNavBar from "@/components/TopNavBar";

export default {
  data() {
    return {
      user: null
    };
  },
  components: {
    TopNavBar
  },
  computed: {
    isAuthenticated() {
      return this.user != null;
    }
  }
};
</script>

<style>
  body {
    background-color: #F5F5F5
  }
</style>
