import Vue from 'vue';
import Router from 'vue-router';
import NavGuard from './nav-guard';
import Home from '@/components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Search from '../components/Search'
import AddPost from '../components/Posts/AddPost';
import Activity from '../components/Activity';
import Profile from '../components/Profile';
import DiscoverPeople from '../components/DiscoverPeople';
import SinglePostView from '../components/posts/SinglePostView';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            beforeEnter: NavGuard
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
            beforeEnter: NavGuard
        },
        {
            path: '/add-post',
            name: 'AddPost',
            component: AddPost,
            beforeEnter: NavGuard
        },
        {
            path: '/activity',
            name: 'Activity',
            component: Activity,
            beforeEnter: NavGuard
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            beforeEnter: NavGuard
        },
        {
            path: '/discover-people',
            name: 'DiscoverPeople',
            component: DiscoverPeople,
            beforeEnter: NavGuard
        },
        {
            path: '/post/:id',
            name: 'SinglePostView',
            component: SinglePostView,
            beforeEnter: NavGuard
        }
    ],
    mode: 'history'
})