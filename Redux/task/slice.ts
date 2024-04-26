import { createSlice } from "@reduxjs/toolkit";

type state = {
    tasks: any[]
}
const initialState: state = {
    tasks: []
}

export const TaskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        loadTasks: (state, { payload }) => {
            state.tasks = payload.value
        }
    }
})
export const { loadTasks } = TaskSlice.actions