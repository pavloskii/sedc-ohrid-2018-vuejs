import { axiosDatabase } from "../../axiosConfig";

export default {
    state: {

    },
    actions: {
        addPost({ commit, getters }, payload) {
            axiosDatabase.post('/posts.json', {
                email: getters.getUser.email,
                image: payload.imageUrl,
                description: payload.description
            }).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
        }
    }
}