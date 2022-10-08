import { api } from './index';

import { v4 as uuid } from 'uuid';

const mockArray = () => Array(Math.round(Math.random() * 10 + 2))
    .fill(null)
    .map(() => ({
        id: uuid(),
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        progress: Math.round(Math.random() * 100),
        price: Math.round(Math.random() * 200),
    }));

const getWeeklyTasks = () => {
    return new Promise(res =>
        setTimeout(
            () => res(mockArray()),
            500
        )
    );
};

const getMounthTasks = () => {
    return new Promise(res =>
        setTimeout(
            () => res(mockArray()),
            800
        )
    );
};

export { getWeeklyTasks, getMounthTasks };