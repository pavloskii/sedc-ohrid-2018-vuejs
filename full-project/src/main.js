import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");

    if (token == null || refreshToken == null) {
      return;
    }

    // this.$store.dispatch("autoLogin", {
    //   refreshToken
    // });
    this.$store.commit("setUser", {
      token: token
    })
  }
})
