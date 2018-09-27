import Vue from 'vue';
import Vuex from 'vuex';
import students from './modules/students';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        students,
        auth
    }
})