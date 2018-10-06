import store from '../store';

export default (to, from, next) => {
    if (store.state.auth.loggedUser) {
        next();
    } else {
        next("/login");
    }
}