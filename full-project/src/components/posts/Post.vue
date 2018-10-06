<template>
    <div class="card">
        <div class="navbar">
          <div class="vertical-align">
            <button class="float-left img-circular" :style="'background-image: url('+post.image+')'"/>
            <div class="float-right pl-2"><strong>{{post.email | emailToUsername}}</strong></div>
          </div>
          <i class="fa fa-ellipsis-h" />
        </div>
        <img class="card-img-top" :src="post.image">
        
        <div class="card-body">
            <div>
                <i class="fa fa-lg fa-heart-o"></i>
                <i class="fa fa-lg fa-comment-o"></i>
            </div>
            <p>{{likes}} likes</p>
            <p class="card-text">
                <strong>{{post.email | emailToUsername}}</strong>
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
      return moment
        .utc(val)
        .local()
        .fromNow()
        .toUpperCase();
    }
  }
};
</script>

<style>
.from-now {
  color: #a9a9a9;
  font-size: 0.7rem;
}
.img-circular {
  width: 36px;
  height: 36px;
  background-size: cover;
  display: block;
  border-radius: 18px;
  -webkit-border-radius: 36px;
  -moz-border-radius: 36px;
}

.vertical-align {
    display: flex;
    align-items: center;
}
</style>
