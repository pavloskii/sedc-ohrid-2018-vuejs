import axios from 'axios';

export default axios.create({
    baseURL: 'https://sedcohrid.firebaseio.com/api'
})