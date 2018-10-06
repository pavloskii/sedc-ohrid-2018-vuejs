import { axiosDatabase } from "../../axiosConfig";
import router from "../../router";
import moment from 'moment';

export default {
    state: {
        posts: []
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        }
    },
    actions: {
        addPost({ commit }, payload) {
            axiosDatabase.post('/posts.json', {
                image: payload.imageUrl,
                description: payload.description,
                email: payload.email,
                date: moment.utc().format('YYYY-MM-DD HH:mm:ss')
            })
                .then(response => {
                    router.replace('/');
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getPosts({ commit }) {
            axiosDatabase.get('/posts.json').then(response => {
                const posts = Object.keys(response.data).map(key => {
                    return {
                        postId: key,
                        ...response.data[key]
                    }
                }).reverse();
                
                commit('setPosts', posts);
            })
        }
    }
}

