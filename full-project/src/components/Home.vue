<template>
    <div>
        <post 
            v-for="post in posts" 
            :key="post.postId" 
            :post="post"
            @openMoreModal="openPost($event)">
        </post>

        <modal :show="showModal" @close="showModal = false">
          <router-link tag="h6" slot="header" :to="'/post/'+postId">
            Go to post
          </router-link>
          <h6 slot="body">Unfollow</h6>
          <h6 slot="footer" @click="showModal = false">Cancel</h6>
        </modal>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      postId: null
    };
  },
  methods: {
    openPost(id) {
      this.postId = id;
      this.showModal = true;
    }
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    }
  }
};
</script>

<style>
</style>
