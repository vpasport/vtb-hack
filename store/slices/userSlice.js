import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";

const initUserState = {
    info: {},
    auth: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initUserState,
    reducers: {
        setAuthState: (state, action) => {
            state.auth = action.payload;
        },
        setInfoState: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => ({
            ...state,
            ...action.payload.auth,
        }),
    },
});

export const { setAuthState, setInfoState } = userSlice.actions;

export const selectAuthState = (state) => state.user.auth;
export const selectInfoState = (state) => state.user.info;

export default userSlice.reducer;