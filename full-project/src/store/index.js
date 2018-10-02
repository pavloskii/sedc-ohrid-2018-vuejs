import Vue from 'vue';
import Vuex from 'vuex';
import { axiosDatabase, axiosAuth } from '../axiosConfig';
import router from '../router';

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
        getStudents(state) {
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
        },
        login({ commit }, payload) {
            axiosAuth.post("", {
                email: payload.email,
                password: payload.password,
                returnSecureToken: payload.returnSecureToken
            }).then(response => {
                const now = new Date().getTime();
                const expiresInMiliseconds =
                    Number.parseInt(data.expiresIn, 10) * 1000;
                const expiresAtDate = new Date(now + expiresInMiliseconds);

                localStorage.setItem("token", data.idToken);
                localStorage.setItem("expiresAt", expiresAtDate);

                commit("setUser", {
                    email: response.email,
                    token: response.idToken
                });

                router.replace("/");
            }).catch(error => console.log(error))
        },
        logout({ commit }) {
            localStorage.removeItem("token");
            commit("setUser", null);
            router.replace("/login");
        }
    }
})
const data = {
    email: this.email,
    password: this.password,
    returnSecureToken: true
};
