import { FiAward, FiClipboard, FiShoppingCart } from 'react-icons/fi';

export const routes = [
    {
        name: 'Задания',
        path: '/tasks',
        icon: FiClipboard
    },
    {
        name: 'Награды',
        path: '/awards',
        icon: FiAward
    },
    {
        name: 'Продукты',
        path: '/products',
        icon: FiShoppingCart
    }
];

export const notShowing = ['/404', '/login'];