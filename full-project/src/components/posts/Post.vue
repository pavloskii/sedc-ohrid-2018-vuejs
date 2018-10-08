<template>
    <div class="card">
        <div class="navbar">
          <div class="vertical-align">
            <button class="float-left img-circular" :style="'background-image: url('+post.image+')'"/>
            <div class="float-right pl-2"><strong>{{post.email | emailToUsername}}</strong></div>
          </div>
          <i class="fa fa-ellipsis-h" @click="openMoreModal"/>
        </div>

        <animated-heart 
          v-if="showAnimatedHeart" 
          @removeHeart="showAnimatedHeart = false"></animated-heart>
        <filtered-image 
          :image="post.image" 
          :filters="post.filters" 
          @imgDblClicked="picDoubleClick"></filtered-image>

        <div class="card-body">
            <div>
                <like :likes="post.likes" :postId="post.postId" ref="like"></like>
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
import Like from "./Like";
import AnimatedHeart from "./AnimatedHeart";
import FilteredImage from "./FilteredImage";

export default {
  props: ["post"],
  data() {
    return {
      showAnimatedHeart: false,
      likes: 0
    };
  },
  methods: {
    openMoreModal() {
      this.$emit("openMoreModal", this.post.postId);
    },
    picDoubleClick() {
      this.showAnimatedHeart = true;
      this.$refs["like"].$el.click();
    }
  },
  created() {
    if (this.post.likes === undefined || this.post.likes === null) {
      this.likes = 0;
    }
    this.likes = Object.keys(this.post.likes).length;
  },
  updated() {
    if (this.post.likes === undefined || this.post.likes === null) {
      this.likes = 0;
    }
    this.likes = Object.keys(this.post.likes).length;
  },
  // computed: {
  //   likes() {
  //     if (this.post.likes === undefined || this.post.likes === null) {
  //       return 0;
  //     }
  //     return Object.keys(this.post.likes).length;
  //   }
  // },
  components: {
    Like,
    AnimatedHeart,
    FilteredImage
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
