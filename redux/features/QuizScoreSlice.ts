import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = {
    value: {
        score: 0,
    }
} 

interface InitialState {
    value: {
        score: number,
    }
}

const quizscoreslice  = createSlice({
    name: 'quizscore',
    initialState,
    reducers: {
        resetScore: () => {
           return initialState;
        },
        calculateScore: (state) => {
            state.value.score = state.value.score + 1
        }
    }
})

export const {calculateScore, resetScore} = quizscoreslice.actions;
export default quizscoreslice.reducer;