import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";

import { getUserByID, login as userLogin, signup as userSignup } from '@api/user';

const _user = {
    "id": 1,
    "firstName": "andrey",
    "lastName": "popkov",
    "email": "popkovand@mail.com",
    "phoneNumber": "+79087777777",
    "description": "im bitch",
    "avatar": "/tmp/var/public/users/1/me.jpeg",
    "birthday": "2020-01-01T00:00:00Z",
    "department": "developers"
};

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

export const login = (logpass) =>
    async dispatch => {
        dispatch(userSlice.actions.setLoading(true));
        try {
            const { data: { result: { id } } } = await userLogin(logpass);
            const { data } = await getUserByID(id);

            dispatch(userSlice.actions.setInfo(data));
        } catch (e) {
            console.error(e);
        } finally {
            dispatch(userSlice.actions.setLoading(false));
        }
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