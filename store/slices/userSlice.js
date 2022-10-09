import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";

import { login as userLogin, signup as userSignup } from '@api/user';

const initUserState = {
    info: null,
    loading: false,
    test: false,
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
        },
        setTest: (state, { payload }) => {
            state.test = payload;
        },

    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.user,
            };
        },
    },
});

export const { setLoading, setInfo, setTest } = userSlice.actions;

export const selectInfo = (state) => state.user.info;
export const selectLoading = (state) => state.user.loading;

export const selectUserById = (id) => (state) => state.users.users.find(el => el.id === id);

export const login = (data) => async dispatch => {
    dispatch(userSlice.actions.setLoading(true));
    userLogin(data)
        .then(res => {
            // console.log(res);
            dispatch(userSlice.actions.setInfo(res.data));
        })
        .catch(err => console.error(err))
        .finally(() => dispatch(userSlice.actions.setLoading(false)));
};
export const signup = (data) => async dispatch => {
    dispatch(userSlice.actions.setLoading(true));
    userSignup(data)
        .then(res => {
            console.log(res);
            dispatch(userSlice.actions.setInfo(res.data));
        })
        .catch(err => console.error(err))
        .finally(() => dispatch(userSlice.actions.setLoading(false)));
};

export default userSlice.reducer;