import { api } from './';

import { v4 as uuid } from 'uuid';

const login = (data) => {
    return new Promise((res) =>
        setTimeout(() =>
            res({
                data: {
                    userAvatar: 'https://sun9-70.userapi.com/impg/_d3jGXuFnEspdPnqQfr-HYiyLeW792auSXffTg/KJaeZbAlMfM.jpg?size=2560x1707&quality=95&sign=8c7b1be6e9a2ed435a716b64fdb68925&type=album',
                    userName: 'Test test',
                    id: uuid()
                }
            }),
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