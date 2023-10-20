import { createSlice } from "@reduxjs/toolkit"

const LoginSlice = createSlice({
    name: 'login',
    initialState: '',
    reducers: {
        loginAuth(state, action) {
            return action.payload
        },
    }
})
export default LoginSlice.reducer;
export const { loginAuth } = LoginSlice.actions 