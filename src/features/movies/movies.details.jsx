import { createSlice } from "@reduxjs/toolkit";

const MoviesDetails = createSlice({
    name: "movies",
    initialState: [],
    reducers: {
        changeComponent(state, action) {
            return action.payload
        },
        addRange(state, action) {
            state.push(action.payload)
            console.log('range--->', state.push(action.payload))
        }
    }
})
export default MoviesDetails.reducer;
export const { changeComponent ,addRange } = MoviesDetails.actions;