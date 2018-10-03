import axios from 'axios';

const apiKey = "AIzaSyDgNDRD4wflh-82SI-iOFFqEWF039Gdum4";
const authUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" + apiKey;
const databaseUrl = 'https://vue-gram1.firebaseio.com';

export const axiosAuth = new axios.create({
    baseURL: authUrl
});

export const axiosDatabase = new axios.create({
    baseURL: databaseUrl
})