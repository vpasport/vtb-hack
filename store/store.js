import {
    configureStore,
    combineReducers,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import * as slicesArray from './slices';

const slices = {};

for (const slice in slicesArray) {
    slices[slicesArray[slice].name] = slicesArray[slice].reducer;
}

const rootReducer = combineReducers(slices);

export const store =
    configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production'
    });

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);