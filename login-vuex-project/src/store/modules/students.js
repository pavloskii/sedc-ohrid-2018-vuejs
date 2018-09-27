import { axiosDatabase } from '../../axiosConfig';

export default {
    state: {
        students: []
    },
    mutations: {
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
        }
    },
    getters: {
        getStudents(state) {
            return state.students;
        }
    }
}