import { axiosDatabase } from "../../axiosConfig";
import router from "../../router";

export default {
    state:{
        posts: []
    },
    mutations:{
        setPosts(state, payload){
            state.posts = payload;
        }
    },
    actions: {
        addPost({ commit }, payload) {
            axiosDatabase.post('/posts.json', {
                image: payload.imageUrl,
                description: payload.description,
                email: payload.email
            })
                .then(response => {
                    router.replace('/');
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getPosts({commit}) {
            axiosDatabase.get('/posts.json').then(response => {
                commit('setPosts', response.data);
            })
        }
    }
}

