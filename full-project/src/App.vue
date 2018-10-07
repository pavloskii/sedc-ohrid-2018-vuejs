<template>
  <div>
    <app-header v-if="isAuth"></app-header>
    <router-view></router-view>
    <app-footer v-if="isAuth"></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  computed: {
    isAuth() {
      return this.$store.getters.isUserAuthenticated;
    }
  }
};
</script>

<style>
@import './assets/css/animations.css';

body {
  padding-top: 45px;
  padding-bottom: 45px;
  background-color: #fafafa;
  font-family: "Open Sans", sans-serif;
}

.btn-circle {
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  line-height: 1.42857;
}

.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  border-radius: 35px;
  font-size: 24px;
  line-height: 1.33;
}
.color-black {
  color: black;
}
.vertical-align {
  display: flex;
  align-items: center;
}
</style>
