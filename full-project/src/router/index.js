import Vue from 'vue';
import Router from 'vue-router';
import NavGuard from './nav-guard';
import Home from '@/components/views/Home';
import Login from '../components/views/Login';
import Signup from '../components/views/Signup';
import Search from '../components/views/Search'
import AddPost from '../components/Posts/AddPost';
import Activity from '../components/views/Activity';
import Profile from '../components/views/Profile';
import DiscoverPeople from '../components/views/DiscoverPeople';
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