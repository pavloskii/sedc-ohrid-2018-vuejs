import { axiosDatabase } from "../../axiosConfig";

export default {
    state: {
        stories: []
    },
    mutations: {
        setStories(state, payload) {
            state.stories = payload;
        }
    },
    actions: {
        getPosts({ commit }) {
            commit('setLoading', true);

            axiosDatabase
                .get('/stories.json').then(response => {

                    const stories = Object.keys(response.data).map(key => {
                        return {
                            storyId: key,
                            ...response.data[key]
                        }
                    }).reverse();
                    
                    commit('setStories', stories);
                    commit('setLoading', false);
                }).catch(error => {
                    commit('setLoading', false);
                    console.log(error)
                })
        }
    }
}