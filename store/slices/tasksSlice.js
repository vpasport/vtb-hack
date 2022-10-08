import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";

import {
    getMounthTasks as getMounthTasksApi,
    getWeeklyTasks as getWeeklyTasksApi
} from '@api/tasks';

const initTasksState = {
    tasks: null,
    loadingTasks: false
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initTasksState,
    reducers: {
        setTask: (state, { payload }) => {
            state.tasks = payload;
        },
        setLoadingTasks: (state, { payload }) => {
            state.loadingTasks = payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.tasks,
            };
        },
    },
});

export const { setLoadingTasks, setTask } = tasksSlice.actions;

export const selectTask = (state) => state.tasks.tasks;
export const selectLoadingTasks = (state) => state.tasks.loadingTasks;

export const getTasks = () => async dispatch => {
    dispatch(tasksSlice.actions.setLoadingTasks(true));

    Promise
        .allSettled([getMounthTasksApi(), getWeeklyTasksApi()])
        .then(res => {
            dispatch(tasksSlice.actions.setTask({
                mounth: res[0].value,
                weekly: res[1].value
            }));
        })
        .catch(err => console.error(err))
        .finally(() => dispatch(tasksSlice.actions.setLoadingTasks(false)));
};

export default tasksSlice.reducer;