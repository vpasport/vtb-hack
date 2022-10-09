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
            avatar: {
                url: 'https://th-thumbnailer.cdn-si-edu.com/jlWcmkkwETB7aONf_PpzTyHS0D8=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg'
            },
            department: 'ПВииВо ВЛРОВ иВОРИВ',
            birthday: '08.12.1999',
            phone_number: '86566151664',
            last_name: 'Петровна',
            first_name: 'Антонина',
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam aperiam ab
                eveniet expedita. Ab incidunt iste expedita voluptate? Aliquid sit illo
                delectus consequuntur ipsam aperiam
                soluta magnam est perspiciatis voluptatibus.`,
            balance: '233923440 трилионов долларов',
            products: null,
            purchases: null

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
const mockItem = (id) => ({
    id,
    info: {
        username: 'username_user_418',
        email: 'usermail_2022@gmail.com',
        avatar: {
            url: 'https://th-thumbnailer.cdn-si-edu.com/jlWcmkkwETB7aONf_PpzTyHS0D8=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg'
        },
        department: 'ПВииВо ВЛРОВ иВОРИВ',
        birthday: '08.12.1999',
        phone_number: '86566151664',
        last_name: 'Петровна',
        first_name: 'Антонина',
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam aperiam ab
                eveniet expedita. Ab incidunt iste expedita voluptate? Aliquid sit illo
                delectus consequuntur ipsam aperiam
                soluta magnam est perspiciatis voluptatibus.`,
        balance: '233923440 трилионов долларов',
        products: null,
        purchases: null
    }
});

const getUserByID = (id) => {
    return new Promise(res =>
        setTimeout(
            () => res({ data: mockItem(id) }),
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