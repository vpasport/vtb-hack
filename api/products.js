import { api } from './index';

import { v4 as uuid } from 'uuid';

const mockArray = () => Array(Math.round(Math.random() * 20 + 2))
    .fill(null)
    .map(() => ({
        id: uuid(),
        tittle: '7 Skills of Highly Effective Programmers',
        imageURL: 'https://img1.akspic.ru/crops/7/8/8/9/6/169887/169887-gorod-zdanie-purpur-tsvetnoy-liniya_gorizonta-7680x4320.jpg',
        description: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...',
        user: {
            userAvatar: 'https://sun9-70.userapi.com/impg/_d3jGXuFnEspdPnqQfr-HYiyLeW792auSXffTg/KJaeZbAlMfM.jpg?size=2560x1707&quality=95&sign=8c7b1be6e9a2ed435a716b64fdb68925&type=album',
            userName: 'Test test',
            id: uuid()
        },
        price: 400,
        price: Math.round(Math.random() * 200),
    }));


const getProducts = () => {
    return new Promise(res =>
        setTimeout(
            () => res({ data: mockArray() }),
            2800
        )
    );
};

export { getProducts };