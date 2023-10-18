// playbackRateSlice.js
import { createSlice } from '@reduxjs/toolkit';

const playbackRateSlice = createSlice({
    name: 'playbackRate',
    initialState: 1, // Default playback rate is 1x
    reducers: {
        setPlaybackRate: (state, action) => {
            return action.payload;
        },
    },
});

export const { setPlaybackRate } = playbackRateSlice.actions;

export default playbackRateSlice.reducer;
