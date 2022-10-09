import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";

import { login as userLogin, signup as userSignup, getUsers as getUsersApi } from '@api/user';

const initUserState = {
    info: null,
    loading: false,
    test: false,
    users: null,
    loadingUsers: false
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
        setUsers: (state, { payload }) => {
            state.users = payload;
        },
        setLoadingUsers: (state, { payload }) => {
            state.loadingUsers = payload;
        },
        editUser: (state, { payload: { id, ...payload } }) => {
            const idx = state.users.findIndex(el => el.id === id);
            if (idx !== -1) {
                const tmp = {...payload };
                state.users[idx] = {
                    ...state.users[idx],
                    ...tmp
                };
            };
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

export const selectUserById = (id) => (state) => state.user.users.find(el => el.id === id);

export const { setLoadingUsers, setUsers } = userSlice.actions;

export const selectUsers = (state) => state.user.users;

export const selectLoadingUsers = (state) => state.user.loadingUsers;


export const getUsers = () => async dispatch => {
    dispatch(userSlice.actions.setLoadingUsers(true));

    getUsersApi()
        .then(({ data }) => {
            dispatch(userSlice.actions.setUsers(data));
        })
        .catch(err => console.error(err))
        .finally(() => dispatch(userSlice.actions.setLoadingUsers(false)));
};

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


export const editUser = ({ callback = () => {}, ...editedUser }) =>
    async dispatch => {
        return new Promise(res => {
                dispatch(userSlice.actions.editUser(editedUser));
                setTimeout(() => res(), 1000);
            })
            .then(() => callback('success'))
            .catch((error) => {
                console.error(error);
                callback('error');
            });
    };
export default userSlice.reducer;