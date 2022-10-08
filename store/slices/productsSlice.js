import moment from 'moment';

import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";

import {
    getProducts as getProductsApi
} from '@api/products';

const initProductsState = {
    products: null,
    loadingProducts: false
};

export const productsSlice = createSlice({
    name: 'products',
    initialState: initProductsState,
    reducers: {
        setProducts: (state, { payload }) => {
            state.products = payload;
        },
        setLoadingProducts: (state, { payload }) => {
            state.loadingProducts = payload;
        },
        setFullInfoInProduct: (state, { payload }) => {
            const idx = state.products.findIndex(el => el.id === payload.id);
            if (idx !== -1) state.products[idx] = payload;
        },
        addReview: (state, { payload: { id, text, user } }) => {
            const idx = state.products.findIndex(el => el.id === id);
            if (idx !== -1) {
                const obj = {
                    text,
                    user,
                    createDate: moment().toISOString()
                };

                if (state.products[idx].reviews)
                    state.products[idx].reviews.unshift(obj);
                else
                    state.products[idx].reviews = [obj];
            };
        },
        deleteProduct: (state, { payload }) => {
            state.products = state.products.filter(el => el.id !== payload);
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.products,
            };
        },
    },
});

export const { setLoadingProducts, setProducts, setFullInfoInProduct } = productsSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectLoadingProducts = (state) => state.products.loadingProducts;
export const selectProductById = (id) => (state) => state.products.products.find(el => el.id === id);

export const getProducts = () => async dispatch => {
    dispatch(productsSlice.actions.setLoadingProducts(true));

    getProductsApi()
        .then(({ data }) => {
            dispatch(productsSlice.actions.setProducts(data));
        })
        .catch(err => console.error(err))
        .finally(() => dispatch(productsSlice.actions.setLoadingProducts(false)));
};

export const addReviewToProduct =
    ({ id = '', text = '', user = {}, callback = () => { } }) =>
        async dispatch => {
            dispatch(productsSlice.actions.addReview({ id, text, user }));

            return new Promise(res => setTimeout(res(), 1000))
                .then(() => callback('success'))
                .catch(() => callback('error'));
        };

export const deleteProduct = ({ id = '', callback = () => { } }) =>
    async dispatch => {
        dispatch(productsSlice.actions.deleteProduct(id));

        return new Promise(res => setTimeout(res(), 1000))
            .then(() => callback('success'))
            .catch(() => callback('error'));
    };

export default productsSlice.reducer;