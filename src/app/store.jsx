import { configureStore } from '@reduxjs/toolkit'
import MoviesDetails from '../features/movies/movies.details'
import profileSlice from '../features/profile/profile.slice';

const store = configureStore({
    reducer: {
        movies: MoviesDetails,
        profile: profileSlice
    }
})

export default store;