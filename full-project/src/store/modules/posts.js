import { axiosDatabase } from "../../axiosConfig";
import router from "../../router";
import moment from 'moment';

export default {
    state: {
        posts: [],
        post: {
            date: "",
            description: "",
            email: "",
            image: ""
        }
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        },
        setPost(state, payload) {
            state.post = payload;
        }
    },
    actions: {
        addPost({ commit }, payload) {
            axiosDatabase
                .post('/posts.json', {
                    image: payload.imageUrl,
                    description: payload.description,
                    email: payload.email,
                    date: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
                    filters: payload.filters
                })
                .then(response => {
                    router.replace('/');
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getPosts({ commit }) {
            commit('setLoading', true);

            axiosDatabase
                .get('/posts.json').then(response => {
                    const posts = Object.keys(response.data).map(key => {
                        return {
                            postId: key,
                            ...response.data[key]
                        }
                    }).reverse();

                    commit('setPosts', posts);
                    commit('setLoading', false);
                }).catch(error => {
                    commit('setLoading', false);
                    console.log(error)
                })
        },
        getPostById({ commit }, payload) {
            commit('setLoading', true);
            axiosDatabase
                .get(`/posts/${payload.id}.json`)
                .then(response => {
                    commit('setPost', response.data);
                    commit('setLoading', false);
                }).catch(error => {
                    commit('setLoading', false);
                    console.log(error)
                })
        },
        likePost({ commit, state }, payload) {
            const postIndex = state.posts.findIndex(post => post.postId == payload.postId);
            if (state.posts[postIndex].likes == undefined) {
                state.posts[postIndex]['likes'] = {};
            }
            state.posts[postIndex].likes[payload.userId] = { email: payload.email };

            axiosDatabase
                .put(`/posts/${payload.postId}/likes/${payload.userId}.json`, {
                    email: payload.email,
                    profilePic: payload.profilePic
                })
                .then(response => {
                    commit('setPost', response.data);
                }).catch(error => console.log(error))
        }
    }
}


