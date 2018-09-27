export default {
    state: {
        loggedUser: null
    },
    mutations: {
        setUser(state, payload) {
            state.loggedUser = payload;
        }
    },
    actions: {},
    getters: {
        isUserAuthenticated(state) {
            return state.loggedUser !== null;
        }
    }
}