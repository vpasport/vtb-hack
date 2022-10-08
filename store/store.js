import {
    configureStore,
    combineReducers,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import * as slicesArray from './slices';

const slices = {};

for (const slice in slicesArray) {
    slices[slicesArray[slice].name] = slicesArray[slice].reducer;
}

const rootReducer = combineReducers(slices);

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        let nextState = {
            ...state,
            ...action.payload,
        };
        return nextState;
    } else {
        return rootReducer(state, action);
    }
};


// export const store =
//     configureStore({
//         reducer: rootReducer,
//         devTools: process.env.NODE_ENV !== 'production'
//     });

// const makeStore = () => store;

const isDev = process.env.NODE_ENV !== 'production';

const makeStore = (context) => {
    let middleware = [];

    const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(middleware),
        devTools: isDev,
        preloadedState: undefined,
    });

    return store;
};

export const wrapper = createWrapper(makeStore, { debug: isDev });