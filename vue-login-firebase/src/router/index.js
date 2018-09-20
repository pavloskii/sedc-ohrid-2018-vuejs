import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import store from '@/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (store.user != null) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  mode: "history"
})
