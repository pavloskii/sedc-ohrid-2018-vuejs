<template>
    <div>

      <centered-container v-if="loading">
        <spinner></spinner>
      </centered-container>
      
      <div v-else>
        <post :post="post" @openMoreModal="showModal = true"/>

        <modal :show="showModal" @close="showModal = false">
          <h6 slot="body">Unfollow</h6>
          <h6 slot="footer" @click="showModal = false">Cancel</h6>
        </modal>
      </div>

    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    ...mapState({
      post: state => state.posts.post,
      loading: state => state.shared.loading
    })
  },
  beforeCreate() {
    this.$store.dispatch("getPostById", { id: this.$route.params.id });
  },
  destroyed() {
    this.$store.commit("setPost", null);
  }
};
</script>

<style>
.center-v-h {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
