import { authApi, userApi } from './';

import { v4 as uuid } from 'uuid';

const login = (data) => {
    const params = new URLSearchParams(data);
    return authApi.get(`/auth/login?${params}`);
};

const getUserByID = (id) => {
    return userApi.get(`/user_service/users/${id}`);
};

const signup = (data) => {
    return new Promise((res) =>
        setTimeout(() =>
            res({ data: { login: 'test', username: 'test', id: 1 } }),
            1000
        ));
    return api.post('/signup', data);
};

const mockArray = () => Array(Math.round(Math.random() * 20 + 2))
    .fill(null)
    .map(() => ({
        id: uuid(),
        info: {
            username: 'username_user_418',
            email: 'usermail_2022@gmail.com',
            avatar: 'https://th-thumbnailer.cdn-si-edu.com/jlWcmkkwETB7aONf_PpzTyHS0D8=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg',
        }
    }));

const getUsers = () => {
    return new Promise(res =>
        setTimeout(
            () => res({ data: mockArray() }),
            2800
        )
    );
};


export {
    login,
    signup,
    getUsers,
    getUserByID
};