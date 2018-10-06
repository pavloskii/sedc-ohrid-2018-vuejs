<template>
    <div class="card">
        <i class="fa fa-ellipsis-h" />
        <img class="card-img-top" :src="post.image">
        
        <div class="card-body">
            <div>
                <i class="fa fa-lg fa-heart-o"></i>
                <i class="fa fa-lg fa-comment-o"></i>
            </div>
            <p>{{likes}} likes</p>
            <p class="card-text">
                <strong>{{post.email}}</strong>
                {{post.description}} 
            </p>
            <small class="from-now">{{post.date | fromNow}}</small>
        </div>
        
    </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["post"],
  computed: {
    likes() {
      if (this.post.likes === undefined || this.post.likes === null) {
        return 0;
      }
      return this.post.likes.length;
    }
  },
  filters: {
    fromNow(val) {
        return  moment(val).fromNow().toUpperCase();
    }
  }
};
</script>

<style>
.from-now {
  color: #a9a9a9;
  font-size: 0.7rem;
}
</style>
