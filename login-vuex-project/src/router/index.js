import Vue from 'vue';
import Router from 'vue-router';
// -------------------------------
import Home from '@/components/Home';
import Login from '../components/Login';
import Students from '../components/Students';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            beforeEnter: (to, from, next) => beforeEnteringRoute(to, from, next)
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/students',
            name: "Students",
            component: Students,
            beforeEnter: (to, from, next) => beforeEnteringRoute(to, from, next)
        }
    ],
    mode: 'history'
})

function beforeEnteringRoute(to, from, next) {
    const token = localStorage.getItem("token");

    if (token != null) {
        next();
    } else {
        next('/login');
    }
}