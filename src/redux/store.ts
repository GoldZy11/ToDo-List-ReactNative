import { configureStore } from '@reduxjs/toolkit'
import { TaskSlice } from './task/slice'
export const store = configureStore({
    reducer: {
        task:TaskSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch