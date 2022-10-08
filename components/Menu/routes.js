import { FiAward, FiClipboard } from 'react-icons/fi';

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
    }
];

export const notShowing = ['/404', '/login'];