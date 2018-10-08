import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import posts from './modules/posts';
import shared from './modules/shared';
import stories from './modules/stories';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        posts,
        shared,
        stories
    }
})
