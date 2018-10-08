<template>
    <div 
        class="d-flex justify-content-center align-items-center center-v-h">
        <slot></slot>
    </div>
</template>

<style>
.center-v-h {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
