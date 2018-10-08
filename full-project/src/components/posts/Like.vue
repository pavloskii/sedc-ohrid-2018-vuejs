<template>
    <i 
        class="fa fa-lg" 
        :class="!isLiked ? 'fa-heart-o':'fa-heart color-red'" 
        @click="putLike">
    </i>
</template>

<script>
export default {
  props: ["likes", "postId"],
  data() {
    return {
      isLiked: false
    };
  },
  methods: {
    putLike() {
      if (this.isLiked) {
        return;
      }

      this.$store.dispatch("likePost", {
        postId: this.postId,
        userId: this.$store.state.auth.loggedUser.userId,
        email: this.$store.state.auth.loggedUser.email,
        profilePic: this.$store.state.auth.loggedUser.profilePic
      });

      this.isLiked = true;
    }
  },
  created() {
    if (this.likes) {
      const userId = this.$store.state.auth.loggedUser.userId;
      if (Object.keys(this.likes).filter(key => key == userId).length >= 1) {
        this.isLiked = true;
      }
    }
  }
};
</script>

<style>
.color-red {
  color: red;
}
</style>
