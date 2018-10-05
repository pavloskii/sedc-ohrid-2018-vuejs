import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Search from '../components/Search'
import AddPost from '../components/Posts/AddPost';
import Activity from '../components/Activity';
import Profile from '../components/Profile';
import DiscoverPeople from '../components/DiscoverPeople'

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
            component: Signup
        },
        {
            path: '/search',
            name: 'Search',
            component: Search,
            beforeEnter: (to, from, next) => beforeEnteringRoute(to, from, next)
        },
        {
            path: '/add-post',
            name: 'AddPost',
            component: AddPost,
            beforeEnter: (to, from, next) => beforeEnteringRoute(to, from, next)
        },
        {
            path: '/activity',
            name: 'Activity',
            component: Activity,
            beforeEnter: (to, from, next) => beforeEnteringRoute(to, from, next)
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            beforeEnter: (to, from, next) => beforeEnteringRoute(to, from, next)
        },
        {
            path: '/discover-people',
            name: 'DiscoverPeople',
            component: DiscoverPeople,
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