<template>
    <footer class="navbar fixed-bottom navbar-light bg-light">
            <router-link to="/" class="btn btn-light" active-class="active" exact><i class="fa fa-home"></i></router-link>
            <divider />
            <button class="btn btn-light"><i class="fa fa-search"></i></button>
            <divider />
            <router-link to="/add-post" v-if="!isMobile" class="btn btn-light" active-class="active">
                <i class="fa fa-plus-square-o"></i>
            </router-link>
            <div v-if="isMobile" class="image-upload">
                <label for="file-input">
                    <i class="fa fa-plus-square-o"></i>
                </label>
                <input id="file-input" type="file"/>
            </div>
            <divider />
            <button class="btn btn-light"><i class="fa fa-heart-o"></i></button>
            <divider />
            <button class="btn btn-light"><i class="fa fa-user-o"></i></button>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false
    };
  },
  created() {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
};
</script>

<style>
.image-upload > input {
  display: none;
}

/* .image-upload img {
  width: 80px;
  cursor: pointer;
} */
</style>
