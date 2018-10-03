import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Search from '../components/Search'
import AddPost from '../components/AddPost';
import Activity from '../components/Activity';
import Profile from '../components/Profile';

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
            path: '/signup',
            name: 'Signup',
            component: Signup,
        },
        {
            path: '/search',
            name: 'Search',
            component: Search,
        },
        {
            path: '/add-post',
            name: 'AddPost',
            component: AddPost,
        },
        {
            path: '/activity',
            name: 'Activity',
            component: Activity,
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
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