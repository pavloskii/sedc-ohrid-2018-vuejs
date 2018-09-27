import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loggedUser: null,
        users: [
            { id: 1, name: "User Eden", age: 23, isActive: false },
            { id: 5, name: "User Dva", age: 90, isActive: true },
            { id: 2, name: "User Dva", age: 90, isActive: true },
            { id: 3, name: "User Tri", age: 67, isActive: false },
            { id: 4, name: "User Cetiri", age: 34, isActive: true },
        ],
        user: { firstName: "John", lastName: "Doe" },
        orders: [
            { id: 1, amount: 50 },
            { id: 2, amount: 145 },
            { id: 3, amount: 78 },
        ]
    },
    getters: {
        getUsers(state) {
            return state.users;
        },
        getUsersFullname(state) {
            return state.user.firstName + " " + state.user.lastName;
        },
        getOrdersTotalAmount(state) {
            let ordersTotalAmount = 0;

            for (let i = 0; i < state.orders.length; i++) {
                ordersTotalAmount += state.orders[i].amount;
            }

            return ordersTotalAmount;
        },
        isUserAuthenticated(state) {
            return state.loggedUser !== null;
        }

    },
    mutations: {
        changeUserActivity(state, payload) {
            const userIndex =
                state.users.findIndex(user => user.id === payload.userID);

            state.users[userIndex].isActive = !state.users[userIndex].isActive
        },
        setUser(state, payload) {
            state.loggedUser = payload;
            console.log(state.loggedUser)
        }
    },
    actions: {

    }
})