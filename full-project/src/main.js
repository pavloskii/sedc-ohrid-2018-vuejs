import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import Post from './components/posts/post';
import Modal from './components/UI/Modal';
import Backdrop from './components/UI/Backdrop';
import emailToUsername from './filters/emailToUsername'
import Spinner from './components/UI/Spinner'

//Global components
Vue.component('post', Post);
Vue.component('modal', Modal);
Vue.component('backdrop', Backdrop);
Vue.component('spinner', Spinner);

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
