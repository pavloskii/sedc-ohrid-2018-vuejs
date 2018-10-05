import { axiosAuth, apiKey, axiosToken } from '../../axiosConfig';
import router from '../../router';

export default {
    state: {
        loggedUser: null,
    },
    getters: {
        isUserAuthenticated(state) {
            return state.loggedUser !== null;
        }
    },
    mutations: {
        setUser(state, payload) {
            state.loggedUser = payload;
        }
    },
    actions: {
        login({ commit }, payload) {
            axiosAuth.post("/verifyPassword?key=" + apiKey, {
                email: payload.email,
                password: payload.password,
                returnSecureToken: payload.returnSecureToken
            }).then(response => {
                console.log(response);
                const now = new Date().getTime();
                const expiresInMiliseconds = Number.parseInt(response.data.expiresIn, 10) * 1000;
                const expiresAtDate = new Date(now + expiresInMiliseconds);

                localStorage.setItem("token", response.data.idToken);
                localStorage.setItem("expiresAt", expiresAtDate);
                localStorage.setItem("refreshToken", response.data.refreshToken);

                commit("setUser", {
                    email: response.data.email,
                    token: response.data.idToken,
                    refreshToken: response.data.refreshToken,
                    userId: response.data.localId
                });

                router.replace("/");
            }).catch(error => console.log(error))
        },
        logout({ commit }) {
            localStorage.removeItem("token");
            commit("setUser", null);
            router.replace("/login");
        },
        signup({ commit }, payload) {
            axiosAuth.post("/signupNewUser?key=" + apiKey, {
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
                .then(response => {
                    console.log(response);
                    const now = new Date().getTime();
                    const expiresInMiliseconds = Number.parseInt(response.data.expiresIn, 10) * 1000;
                    const expiresAtDate = new Date(now + expiresInMiliseconds);

                    localStorage.setItem("token", response.data.idToken);
                    localStorage.setItem("refreshToken", response.data.refreshToken);
                    localStorage.setItem("expiresAt", expiresAtDate);

                    commit("setUser", {
                        email: response.data.email,
                        token: response.data.idToken,
                        refreshToken: response.data.refreshToken,
                        userId: response.data.localId
                    });

                    router.replace("/");
                })
                .catch(error => {
                    console.log(error.data);
                })
        },
        autoLogin({ commit }, payload) {
            // axiosToken.post('token?key=' + apiKey, {
            //     grant_type: "refresh_token",
            //     refresh_token: payload.refreshToken
            // }).then(response => {
            //     console.log(response);
            // })
            // commit()
        }
    }
}