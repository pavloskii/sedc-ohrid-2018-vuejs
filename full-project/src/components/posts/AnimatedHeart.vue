<template>
    <i class="fa fa-heart fa-5x animated-heart heart"></i>
</template>

<script>
export default {
    created(){
        setTimeout(() => {
            this.$emit('removeHeart');
        }, 1000);
    }
};
</script>

<style>
.animated-heart {
  animation: heartbeat 1s 1;
}
.heart {
  position: absolute;
  top: 40%;
  left: 40%;
  color: rgba(255, 255, 255, 0.7);
  z-index: 10000;
}

@keyframes heartbeat {
  0% {
    transform: scale(0.75);
  }
  20% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.75);
  }
  60% {
    transform: scale(1);
  }
  80% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(0.75);
  }
}
</style>
