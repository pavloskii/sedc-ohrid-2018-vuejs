import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './modules/authentication';
import posts from './modules/posts';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authentication,
        posts
    }
})
