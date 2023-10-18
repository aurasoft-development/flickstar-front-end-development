import { createSlice } from "@reduxjs/toolkit";

const AddRange = createSlice({
    name: "range",
    initialState: [],
    reducers: {
        addRange(state, action) {
            state.push(action.payload)
        }
    }
})
export default AddRange.reducer;
export const {addRange } = AddRange.actions;