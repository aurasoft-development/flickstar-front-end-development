import { configureStore } from '@reduxjs/toolkit'
import MoviesDetails from '../features/movies/movies.details'
import profileSlice from '../features/profile/profile.slice';
import videoSlice from '../features/video-player/videoSlice';
import playbackRateSlice from '../features/video-player/playbackRateSlice';
import AddRange from '../features/movies/AddRange';
// import { addRange } from '../features/movies/AddRange';

const store = configureStore({
    reducer: {
        movies: MoviesDetails,
        profile: profileSlice,
        video: videoSlice,
        playbackRate: playbackRateSlice,
        range: AddRange,
    }
})

export default store;