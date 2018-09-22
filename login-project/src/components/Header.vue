<template>
<nav class="nav nav-pills nav-fill bg-light">
  <router-link
    v-for="item in navItems"
    :key="item.name"
    class="nav-item nav-link" 
    :to="item.path"
    active-class="active"
    exact>
    {{item.name}}
  </router-link>
  <a class="nav-item nav-link btn btn-warning" @click="logout">Log out</a>
</nav>
    <!-- :class="{active: active == item.name}" -->
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { path: "/", name: "Home" },
        { path: "/users", name: "Users" },
        { path: "/comments", name: "Comments" }

      ],
      active: ""
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.replace("/login");
    }
  },
  computed: {
      isAuth(){
          return localStorage.getItem("token");
      }
  }
};
</script>

<style>
</style>
