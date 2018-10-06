<template>
<div>
    <backdrop v-if="show" @clicked="$emit('close')"></backdrop>
    <transition name="fadeaway">
        <div v-if="show" class="app-modal">
            <slot name="header"></slot>
            <hr>
            <slot name="body"></slot>
            <hr>
            <slot name="footer"></slot>
        </div>
    </transition>
</div>
</template>

<script>
export default {
  props: ["show"]
};
</script>

<style>
.app-modal {
  position: fixed;
  z-index: 1050;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  top: 30%;
  left: 25%;
  width: 50%;
  border-radius: 15px;
}
</style>
