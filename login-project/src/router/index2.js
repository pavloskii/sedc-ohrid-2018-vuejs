import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '../components/Login';
import Users from '../components/Users';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/users',
            name: 'Users',
            component: Users,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        }
    ],
    mode: 'history'
})


// router.beforeEach((to, from, next) => {
//     if (false) {
//         next();
//     } else {
//         next('/login');
//     }
// })

export default router;