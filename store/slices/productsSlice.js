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

export const { setLoadingProducts, setProducts } = productsSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectLoadingProducts = (state) => state.products.loadingProducts;

export const getProducts = () => async dispatch => {
    dispatch(productsSlice.actions.setLoadingProducts(true));

    getProductsApi()
        .then(({ data }) => {
            dispatch(productsSlice.actions.setProducts(data));
        })
        .catch(err => console.error(err))
        .finally(() => dispatch(productsSlice.actions.setLoadingProducts(false)));
};

export default productsSlice.reducer;