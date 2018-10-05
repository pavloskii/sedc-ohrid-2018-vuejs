import { axiosDatabase } from "../../axiosConfig";

export default {
    actions: {
        addPost({ commit }, payload) {
            axiosDatabase.post('/posts.json', {
                image: payload.imageUrl,
                description: payload.description,
                email: payload.email
            })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}

