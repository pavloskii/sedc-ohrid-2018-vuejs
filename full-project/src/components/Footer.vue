<template>
    <footer class="navbar fixed-bottom navbar-light bg-light">
        <router-link
            :to="r.path" 
            class="btn btn-light flex" 
            v-for="r in routes" 
            :key="r.icon">
            <i :class="r.icon"></i>
        </router-link >
    </footer>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { path: "/", icon: "fa fa-home" },
        { path: "/search", icon: "fa fa-search" },
        { path: "/add-post", icon: "fa fa-plus-square-o" },
        { path: "/activity", icon: "fa fa-heart-o" },
        { path: "/profile", icon: "fa fa-user-o" }
      ]
    };
  }
};
</script>

<style>
.flex {
  flex: 1;
}
</style>
