<template>
    <header>
        <div>This is our ugly homepage</div>
        <button class="btn btn-primary" @click="logout">Log out</button>
        <hr>
    </header>
</template>

<script>
export default {
    methods: {
        logout(){
            localStorage.removeItem("token");
            this.$router.replace('/login');
        }
    }
};
</script>

<style>
</style>
