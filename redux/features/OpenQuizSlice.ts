import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = {
    value: {
        page: 'menu',
    }
}

type InitialState = {
    value: {
        page: string
    }
}

const openquizslice = createSlice({
    name: 'openquiz',
    initialState,
    reducers: {
        openMenuPage: () => {
            return initialState;
        },
        openQuizPage: (state) => {
            state.value.page = 'quiz';
        },
        openTotalScorePage: (state) => {
            state.value.page = 'totalscore';
        }
    }
})

export const {openMenuPage, openQuizPage, openTotalScorePage} = openquizslice.actions;
export default openquizslice.reducer;