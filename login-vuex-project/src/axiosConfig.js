import axios from 'axios';

const apiKey = "AIzaSyCw-lZIhvFfrU2Y2GBbZr2kXO1BmVstvHM";
const authUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" + apiKey;
const databaseUrl = 'https://sedcohrid.firebaseio.com/api';

export const axiosAuth = new axios.create({
    baseURL: authUrl
});

export const axiosDatabase = new axios.create({
    baseURL: databaseUrl
})