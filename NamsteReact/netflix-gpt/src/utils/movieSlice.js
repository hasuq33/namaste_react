import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowplayingMovies: null, 
        trailerVideo: null,
        popularMovies: null,
        upcomingMovies: null,
        topRatedMovies:null, 
    },
    reducers:{
        addNowPlayingMovies:(state , action)=>{
            state.nowplayingMovies = action.payload;
        }, 
        addPopularMovies:(state, action) =>{
            state.popularMovies = action.payload;
        },
        addUpcomingMovies:(state, action)=>{
            state.upcomingMovies = action.payload; 
        },  
        addTrailerVideo:(state, action)=>{
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload; 
        }
    }
})

export const { addNowPlayingMovies , addTrailerVideo , addPopularMovies , addUpcomingMovies , addTopRatedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;