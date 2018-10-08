<template>
    <centered-container v-if="loading">
      <spinner></spinner>
    </centered-container>

    <div v-else>
        <stories-horizontal-list></stories-horizontal-list>

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
import { mapState } from "vuex";
import StoriesHorizontalList from "../stories/StoriesHorizontalList";

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
    ...mapState({
      posts: state => state.posts.posts,
      loading: state => state.shared.loading
    })
  },
  components: {
    StoriesHorizontalList
  }
};
</script>

<style>
</style>
