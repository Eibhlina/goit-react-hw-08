import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
    word: ""
}

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
       changeFilters(state, action) {
            state.word = action.payload
       }
    }
})  

export const { changeFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;