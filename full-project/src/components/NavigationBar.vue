<template>
    <nav class="nav nav-pills nav-fill">
        <router-link
            v-for="item in navItems" :key="item.name"
            :to="item.path" 
            class="nav-item nav-link"
            active-class="active"
            exact>
            {{item.name}}
        </router-link>
        <button class="btn btn-warning" @click="logout">Logout</button>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: "Home", path: "/" }
      ]
    };
  },
  methods:{
    logout(){
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
</style>
