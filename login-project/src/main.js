import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // created() {
  //   router.beforeEach((to, from, next) => {
  //     if (false) {
  //       next();
  //     } else {
  //       next('/login');
  //     }
  //   })
  // }
})
