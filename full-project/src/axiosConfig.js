import axios from 'axios';

export const apiKey = "AIzaSyCw-lZIhvFfrU2Y2GBbZr2kXO1BmVstvHM";
const authUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty";
const databaseUrl = 'https://sedcohrid.firebaseio.com/api';
const refreshTokenUrl = 'https://securetoken.googleapis.com/v1'

export const axiosAuth = new axios.create({
    baseURL: authUrl
});

export const axiosDatabase = new axios.create({
    baseURL: databaseUrl
})

export const axiosToken = new axios.create({
    baseURL: refreshTokenUrl
})