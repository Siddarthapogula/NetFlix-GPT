import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "gpt",
    initialState: {
        ShowGpt : false,
        GptSuggestedMovies: null,
        GptMovieNames: null,
    },
    reducers: {
        toggleGptSearch : (state)=>{
            state.ShowGpt = !state.ShowGpt;
        },
        addGptMovies: (state, action)=>{
            const {movieNames, movies} = action.payload;
            state.GptMovieNames = movieNames;
            state.GptSuggestedMovies = movies;
        }
    }
})

export const {toggleGptSearch, addGptMovies} = GptSlice.actions;

export default GptSlice.reducer;