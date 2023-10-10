import { createSlice } from "@reduxjs/toolkit";

const MoviesDetails = createSlice({
    name: "movies",
    initialState: [],
    reducers: {
        changeComponent(state, action) {
            return action.payload
        }
    }
})
export default MoviesDetails.reducer;
export const { changeComponent } = MoviesDetails.actions;