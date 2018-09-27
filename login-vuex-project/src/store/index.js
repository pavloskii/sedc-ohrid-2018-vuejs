import Vue from 'vue';
import Vuex from 'vuex';
import { axiosDatabase } from '../axiosConfig';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loggedUser: null,
        students: []
    },
    getters: {
        isUserAuthenticated(state) {
            return state.loggedUser !== null;
        },
        getStudents(state){
            return state.students;
        }
    },
    mutations: {
        setUser(state, payload) {
            state.loggedUser = payload;
        },
        setStudents(state, payload) {
            state.students = payload;
        }
    },
    actions: {
        getStudents({ commit }) {
            axiosDatabase.get("/students.json")
                .then(response => {
                    commit("setStudents", response.data);
                })
        }
    }
})