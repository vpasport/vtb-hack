import { api } from './';

const login = (data) => {
    return new Promise((res) =>
        setTimeout(() =>
            res({ data: { login: 'test', name: 'test', id: 1 } }),
            1000
        ));
    return api.post('/login', data);
};

const signup = (data) => {
    return new Promise((res) =>
        setTimeout(() =>
            res({ data: { login: 'test', name: 'test', id: 1 } }),
            1000
        ));
    return api.post('/signup', data);
};

export { login, signup };