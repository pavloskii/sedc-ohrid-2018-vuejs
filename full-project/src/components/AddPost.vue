<template>
<div>
    <div v-show="!imageTaken">
        <video autoplay ref="video" class="video"></video>
        <button 
            class="btn btn-light btn-block" 
            @click="takePicture">
            <i class="fa fa-camera"></i>
            Capture
        </button>
    </div>

    <div v-show="imageTaken">
        <canvas 
            width="320px" 
            height="240px" 
            ref="canvas" 
            class="canvas"></canvas>
        <button class="btn btn-light btn-block" @click="recapture">
            <i class="fa fa-camera"></i>
            Recapture
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
                    class="btn btn-light btn-block" 
                    @click.prevent="addPost">
                    Post
                </button>
            </form>

        </div>
    </div>


</div>  
</template>

<script>
export default {
  data() {
    return {
      imageTaken: false,
      hasCameraAccess: true,
      post: {
        imageUrl: "",
        description: ""
      }
    };
  },
  methods: {
    takePicture() {
      this.imageTaken = true;
      const canvas = this.$refs["canvas"];
      const videoPlayer = this.$refs["video"];

      canvas
        .getContext("2d")
        .drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);

      this.post.imageUrl = canvas.toDataURL("image/jpeg", 0.3);
      
      videoPlayer.srcObject.getVideoTracks().forEach(track => {
        track.stop();
      });
    },
    recapture() {
      this.post.imageUrl = "";
      this.imageTaken = false;
      this.accessUsersCamera();
    },
    accessUsersCamera() {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(stream => {
          this.$refs["video"].srcObject = stream;
        })
        .catch(error => {
          this.hasCameraAccess = false;
        });
    },
    addPost() {
      const email = this.$store.state.authentication.loggedUser.email;
      this.$store.dispatch('addPost', {
          imageUrl: this.post.imageUrl,
          description: this.post.description,
          email
      });
    }
  },
  mounted() {
    this.accessUsersCamera();
  },
  beforeDestroy() {
    this.$refs["video"].srcObject.getVideoTracks().forEach(track => {
      track.stop();
    });
  }
};
</script>

<style>
.video,
.canvas {
  width: 512px;
  max-width: 100%;
}
</style>
