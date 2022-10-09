import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://82.146.55.184',
    mode: 'no-cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    credentials: 'same-origin',
    crossdomain: true,
});