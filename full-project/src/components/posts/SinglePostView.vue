<template>
    <div>
        <post :post="post" @openMoreModal="showModal = true"/>

        <modal :show="showModal" @close="showModal = false">
          <h6 slot="body">Unfollow</h6>
          <h6 slot="footer" @click="showModal = false">Cancel</h6>
        </modal>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    };
  },
  computed:{
      post(){
          return this.$store.state.posts.post;
      }
  },
  beforeCreate() {
    this.$store.dispatch("getPostById", { id: this.$route.params.id })
  },
  destroyed() {
    this.$store.commit("setPost", null);
  }
};
</script>

<style>
</style>
