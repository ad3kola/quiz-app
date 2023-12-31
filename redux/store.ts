import { configureStore } from "@reduxjs/toolkit";
import OpenQuizSliceReducer from "./features/OpenQuizSlice";
import QuizScoreSlice from "./features/QuizScoreSlice";

export const store = configureStore({
    reducer: {
        OpenQuizSliceReducer,
        QuizScoreSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch