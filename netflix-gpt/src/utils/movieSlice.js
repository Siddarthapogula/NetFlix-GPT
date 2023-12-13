import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies : null,
        trailerVideo :  null,
        PopularMovies : null,
        TopRatedMovies : null,
        UpCommingMovies : null
    },
    reducers:{
        addNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action)=>{
            state.PopularMovies = action.payload;
        },
        addTopRatedMovies: (state, action)=>{
            state.TopRatedMovies = action.payload;
        },
        addUpCommingMovies : (state, action)=>{
            state.UpCommingMovies = action.payload;
        },
        addTrailerVideo : (state , action)=>{
            state.trailerVideo = action.payload;
        }
    },
});;
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpCommingMovies}= movieSlice.actions;
export default movieSlice.reducer;


 