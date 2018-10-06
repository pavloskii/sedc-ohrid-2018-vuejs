<template>
    <footer class="navbar navbar-light bg-light fixed-bottom custom-border" style="padding:0">
        <router-link
            :to="r.path" 
            class="btn btn-light flex" 
            v-for="r in routes"
            active-class="active"
            exact 
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
        { path: "/", icon: "fa fa-lg fa-home" },
        { path: "/search", icon: "fa fa-lg fa-search" },
        { path: "/add-post", icon: "fa fa-lg fa-plus-square-o" },
        { path: "/activity", icon: "fa fa-lg fa-heart-o" },
        { path: "/profile", icon: "fa fa-lg fa-user-o" }
      ]
    };
  }
};
</script>

<style>
.flex {
  flex: 1;
}
.nav-buttons {
  background-color: white;
  color: black;
}
.custom-border {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
