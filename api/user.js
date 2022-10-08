import { api } from './';

const login = (data) => {
    return new Promise((res) =>
        setTimeout(() =>
            res({ data: { login: 'test', name: 'test', id: 1 } }),
            1000
        ));
    return api.post('/login', data);
};

export { login };