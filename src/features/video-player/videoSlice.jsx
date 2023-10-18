// videoSlice.js
import { createSlice } from '@reduxjs/toolkit';
import english_video from '../../assets/video/english_video.mp4'

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        url: english_video, // Video URL
        language: 'en', // Default language
    },
    reducers: {
        setVideoUrl: (state, action) => {
            state.url = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const { setVideoUrl, setLanguage } = videoSlice.actions;

export default videoSlice.reducer;
