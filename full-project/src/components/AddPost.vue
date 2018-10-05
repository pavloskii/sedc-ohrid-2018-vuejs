<template>
<div>
    <div v-show="!imageTaken">
        <video autoplay ref="player" class="video"></video>
        <button class="btn btn-light btn-block" @click="takePicture">
            <i class="fa fa-plus-square-o"></i> Capture
        </button>
    </div>

    <div v-show="imageTaken">
        <canvas class="canvas" ref="canvas" width="320px" height="240px"></canvas>
        <button class="btn btn-light btn-block" @click="recapture">
            <i class="fa fa-plus-square-o"></i> Recapture
        </button>
        <br>
        <div class="form-group container">
            <input v-model="post.description" class="form-control" type="text" placeholder="description">
            <br>
            <button class="btn btn-light form-control" @click="addPost">Post</button>
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
    accessCamera() {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(stream => {
          this.$refs["player"].srcObject = stream;
        })
        .catch(error => {
          this.hasCameraAccess = false;
        });
    },
    takePicture() {
      this.imageTaken = true;
      const canvas = this.$refs["canvas"];
      const videoPlayer = this.$refs["player"];

      canvas
        .getContext("2d")
        .drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);

      this.post.imageUrl = canvas.toDataURL("image/jpeg", 0.2);

      videoPlayer.srcObject.getVideoTracks().forEach(track => {
        track.stop();
      });
    },
    recapture() {
      this.imageTaken = false;
      this.accessCamera();
    },
    addPost() {
        this.$store.dispatch('addPost', this.post);
    }
  },
  mounted() {
    this.accessCamera();
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
