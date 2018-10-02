<template>
    <div class="container">
        <div>
            <video autoplay ref="player"></video>
            <canvas ref="canvas" width="320px" height="240px"></canvas>
            <button class="btn btn-primary">Capture</button>
        </div>

        <div class="pick-image">
            <h6>Pick and image instead</h6>
            <input type="file" accept="image/*" >
        </div>

    </div>
</template>

<script>
export default {
  mounted: {
    initializeMedia() {
      if (!("mediaDevices" in navigator)) {
        navigator.mediaDevices = {};
      }

      if (!("getUserMedia" in navigator.mediaDevices)) {
        navigator.mediaDevices.getUserMedia = function(constraints) {
          var getUserMedia =
            navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

          if (!getUserMedia) {
            return Promise.reject(new Error("getUserMedia is not implemented"));
          }

          return new Promise((resolve, reject) => {
            getUserMedia.call(navigator, constraints, resolve, reject);
          });
        };
      }

      navigator.getUserMedia()
    }
  }
};
</script>

<style>
.pick-image {
}
</style>
