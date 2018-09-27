<template>
    <div>
        <h1>Students in SEDC:</h1>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch("getStudents");
    }
}
</script>

<style>

</style>
