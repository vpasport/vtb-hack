import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";

import { login as userLogin } from '@api/user';

const initUserState = {
    info: null,
    loading: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initUserState,
    reducers: {
        setInfo: (state, { payload }) => {
            state.info = payload;
        },
        setLoading: (state, { payload }) => {
            state.loading = payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => ({
            ...state,
            ...action.payload.user,
        }),
    },
});

export const { setLoading, setInfo } = userSlice.actions;

export const selectInfo = (state) => state.user.info;
export const selectLoading = (state) => state.user.loading;

export const login = (login, password) => async dispatch => {
    dispatch(userSlice.actions.setLoading(true));
    userLogin({ login, password })
        .then(res => {
            console.log(res);
            dispatch(userSlice.actions.setInfo(res.data));
        })
        .catch(err => console.error(err))
        .finally(() => dispatch(userSlice.actions.setLoading(false)));
};

export default userSlice.reducer;