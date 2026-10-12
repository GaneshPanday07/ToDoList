import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from '../features/task/TaskSlice';
export const store = configureStore({
    reducer: {
        task: TaskReducer
    }
})
export default store