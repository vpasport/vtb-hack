import { api } from './index';

import { v4 as uuid } from 'uuid';
import moment from 'moment';

const mockArray = () => Array(Math.round(Math.random() * 20 + 2))
    .fill(null)
    .map(() => ({
        id: uuid(),
        name: 'name_user_418',
        email: 'usermail_2022@gmail.com',
        avatar: 'https://th-thumbnailer.cdn-si-edu.com/jlWcmkkwETB7aONf_PpzTyHS0D8=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg',
    }));


const getUsers = () => {
    return new Promise(res =>
        setTimeout(
            () => res({ data: mockArray() }),
            2800
        )
    );
};

// const mockItem = (id) => ({
//     id,
//     name: 'name_user_418',
//     email: 'usermail_2022@gmail.com',
//     avatar: 'https://th-thumbnailer.cdn-si-edu.com/jlWcmkkwETB7aONf_PpzTyHS0D8=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/97/2c/972c4531-0552-4a49-b51b-4cdb5066bd1d/tacc1157_05_faceright_10k_rgb.jpg',
// });

// const getUserById = (id) => {
//     return new Promise(res =>
//         setTimeout(
//             () => res({ data: mockItem(id) }),
//             1000)
//     );
// };

export { getUsers };