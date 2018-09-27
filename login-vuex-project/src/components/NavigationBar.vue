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
    </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: "Home", path: "/" },
        { name: "Users", path: "/users" },
        { name: "Students", path: "/students" }
      ]
    };
  }
};
</script>

<style>
</style>
