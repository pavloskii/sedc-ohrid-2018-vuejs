<template>
<div>
    <div v-show="!imageTaken">
        <video autoplay ref="video" class="video"></video>
        <div class="navbar navbar-light fixed-bottom video-buttons">
          <button class="btn btn-circle btn-dark btn-lg" @click="toggleFacingMode">
              <i class="fa fa-refresh"></i>
          </button>
          <button class="btn btn-circle btn-xl" @click="takePicture">
              <i class="fa fa-camera fa-lg"></i>
          </button>

          <button class="btn btn-circle btn-dark btn-lg">
              <i class="fa fa-image"></i>
          </button>
        </div>
    </div>

    <div v-show="imageTaken">
        <canvas ref="canvas" class="canvas d-none"></canvas>
        <img :src="post.imageUrl" class="canvas" :style="{'-webkit-filter': appliedFilters}">
        <filters :image="post.imageUrl" @activeFilter="applyFilter($event)"></filters>
        <button class="btn btn-dark btn-block" @click="recapture">
            <i class="fa fa-camera fa-lg"></i> Recapture
        </button>

        <br>
        <div class="container">
            <form>
                <input 
                    type="text" 
                    placeholder="Description" 
                    class="form-control"
                    v-model="post.description">
                    <br>
                <button 
                    class="btn btn-outline-dark btn-block" 
                    @click.prevent="addPost">
                    Post
                </button>
            </form>

        </div>
    </div>


</div>  
</template>

<script>
import Filters from "./Filters";

export default {
  data() {
    return {
      imageTaken: false,
      hasCameraAccess: true,
      selfieMode: true,
      appliedFilters: "",
      post: {
        imageUrl: "",
        description: "",
        filters: []
      }
    };
  },
  methods: {
    takePicture() {
      this.imageTaken = true;
      const canvas = this.$refs["canvas"];
      const videoPlayer = this.$refs["video"];
      canvas.width = videoPlayer.videoWidth;
      canvas.height = videoPlayer.videoHeight;

      canvas
        .getContext("2d")
        .drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);

      this.post.imageUrl = canvas.toDataURL("image/jpeg", 0.3);
      this.stopCamera();
    },
    recapture() {
      this.post.imageUrl = "";
      this.post.filters = [];
      this.appliedFilters = "";
      this.imageTaken = false;
      this.accessUsersCamera();
    },
    accessUsersCamera() {
      const mode = this.selfieMode ? "user" : "environment";

      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: mode } })
        .then(stream => {
          this.$refs["video"].srcObject = stream;
        })
        .catch(error => {
          this.hasCameraAccess = false;
        });
    },
    stopCamera() {
      this.$refs["video"].srcObject.getVideoTracks().forEach(track => {
        track.stop();
      });
    },
    toggleFacingMode() {
      this.selfieMode = !this.selfieMode;
      this.stopCamera();
      this.accessUsersCamera();
    },
    addPost() {
      const email = this.$store.state.auth.loggedUser.email;
      const filters = {};
      this.post.filters.forEach(f => {
        if (f.chosen) {
          filters[f.name] = f.percent;
        }
      });

      this.$store.dispatch("addPost", {
        imageUrl: this.post.imageUrl,
        description: this.post.description,
        email,
        filters
      });
    },
    applyFilter(filter) {
      const isAddedBefore = this.post.filters.find(f => f.name == filter.name);

      if (isAddedBefore) {
        const filterIndex = this.post.filters.indexOf(isAddedBefore);
        this.post.filters[filterIndex] = filter;
      } else {
        this.post.filters.push(filter);
      }
      let filters = "";
      this.post.filters.forEach(filter => {
        filters += `${filter.name}(${filter.percent}%)`;
      });

      this.appliedFilters = filters;
    }
  },
  mounted() {
    this.accessUsersCamera();
  },
  beforeDestroy() {
    this.stopCamera();
  },
  components: {
    Filters
  }
};
</script>

<style>
.video,
.canvas {
  max-width: 100%;
  max-height: 100%;
}
.video-buttons {
  padding: 0 15px 0 15px;
  margin-bottom: 50px;
}
</style>
