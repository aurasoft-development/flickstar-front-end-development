import { createSlice } from "@reduxjs/toolkit";

const Profile = createSlice({
    name: "profile",
    initialState: [],
    reducers: {
        editProfile(state, action) {
            return action.payload;
            // console.log("action----->",action.payload)
        }
    }
})
export default Profile.reducer;
export const { editProfile } = Profile.actions;