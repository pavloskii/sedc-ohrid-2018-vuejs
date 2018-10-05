<template>
    <div>
        <post v-for="(post, i) in posts" :key="i" :post="post"></post>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('getPosts');
    },
    computed:{
        posts(){
            return this.$store.state.posts.posts;
        }
    }
};
</script>

<style>
</style>
