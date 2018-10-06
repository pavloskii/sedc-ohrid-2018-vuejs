import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import Post from './components/posts/post';
import emailToUsername from './filters/emailToUsername'

//Global components
Vue.component('post', Post);
//Global filters
Vue.filter('emailToUsername', emailToUsername);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.dispatch("autoLogin");
  }
})
