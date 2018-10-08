import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import Post from './components/posts/post';
import Modal from './components/UI/Modal';
import Backdrop from './components/UI/Backdrop';
import emailToUsername from './filters/emailToUsername'
import Spinner from './components/UI/Spinner';
import CenteredContainer from './components/UI/CenteredContainer';

//Global filters
Vue.filter('emailToUsername', emailToUsername);

//Global components
Vue.component('post', Post);
Vue.component('modal', Modal);
Vue.component('backdrop', Backdrop);
Vue.component('spinner', Spinner);
Vue.component('centered-container', CenteredContainer);



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
