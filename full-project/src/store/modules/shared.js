export default {
    state: {
        error: null,
        loading: null
    },
    mutations: {
        setError(state, payload) {
            state.error = payload;
        },
        setLoading(state, payload) {
            state.loading = payload;
        }
    }
}