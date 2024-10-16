import { MOVIE_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

export const useNowPlayingMovies = () =>{
    const dispatch =useDispatch();

    const getNowPlayingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', MOVIE_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(()=>{
      getNowPlayingMovies();
    },[]);
}