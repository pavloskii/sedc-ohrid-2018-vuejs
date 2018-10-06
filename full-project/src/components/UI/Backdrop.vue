<template>
    <div class="backdrop" @click="clicked" />
</template>

<script>
export default {
  methods: {
    clicked() {
      this.$emit('clicked');
    }
  }
};
</script>

<style>
.backdrop {
  position: fixed;
  z-index: 1049;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
</style>
