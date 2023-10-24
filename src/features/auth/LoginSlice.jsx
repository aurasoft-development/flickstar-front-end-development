import { createSlice } from "@reduxjs/toolkit"

const LoginSlice = createSlice({
    name: 'login',
    initialState: [],
    reducers: {
        loginAuth(state, action) {
            const token = localStorage.getItem('user_login')
            return token;
        },
    }
})
export default LoginSlice.reducer;
export const { loginAuth } = LoginSlice.actions 