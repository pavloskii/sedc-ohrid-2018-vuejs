<template>
    <div class="container">
      <!-- :class="{'hide-element': imageTaken}" -->
        <div v-if="hasCamera">
          <div class="row">
            <video autoplay 
              ref="player" 
              class="video h-100"
              :class="{'d-none': imageTaken}">
            </video>
            <canvas 
              ref="canvas" 
              class="canvas h-100"
              width="320px"
              height="240px"
              :class="{'d-none': !imageTaken}"
              >
            </canvas>
            <button 
              class="btn col-md-12" 
              @click="takePicture"
              :class="{'d-none': imageTaken}">
              <i class="fa fa-camera"></i>
              Capture
            </button>
          </div>
            
        </div>
        <div v-else>
            <h6>Pick an image instead</h6>
            <input type="file" accept="image/*" class="btn btn-light" @change="getBase64">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      hasCamera: true,
      imageTaken: false,
      imageFile: null
    };
  },
  methods: {
    dataURItoBlob(dataURI) {
      var binary = atob(dataURI.split(",")[1]);
      var array = [];
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], { type: "image/jpeg" });
    },
    getBase64(event) {
      console.log(event, event.target.files[0])
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function() {
        this.imageFile = reader.result;
        console.log(reader.result);
      };
      reader.onerror = function(error) {
        console.log("Error: ", error);
      };
    },
    takePicture() {
      this.imageTaken = true;
      const canvas = this.$refs["canvas"];
      const videoPlayer = this.$refs["player"];

      canvas
        .getContext("2d")
        .drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);

      videoPlayer.srcObject.getVideoTracks().forEach(track => {
        track.stop();
      });

      this.imageFile = canvas.toDataURL("image/jpeg", 0.2);
  
      // var blob = this.dataURItoBlob(canvas.toDataURL());
      // this.imageFile = URL.createObjectURL(blob);
      // console.log(this.imageFile)
    }
  },
  mounted() {
    // if (!("mediaDevices" in navigator)) {
    //   navigator.mediaDevices = {};
    // }

    // if (!("getUserMedia" in navigator.mediaDevices)) {
    //   navigator.mediaDevices.getUserMedia = function(constraints) {
    //     var getUserMedia =
    //       navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    //     if (!getUserMedia) {
    //       return Promise.reject(new Error("getUserMedia is not implemented"));
    //     }

    //     return new Promise((resolve, reject) => {
    //       getUserMedia.call(navigator, constraints, resolve, reject);
    //     });
    //   };
    // }

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => {
        this.$refs["player"].srcObject = stream;
      })
      .catch(error => {
        this.hasCamera = false;
      });
  }
};
</script>

<style>
.pick-image {
  /* display: none; */
}
.hide-element {
  display: none;
}
.video {
  background-color: black;
}

.video,
.canvas {
  width: 512px;
  max-width: 100%;
}
</style>
