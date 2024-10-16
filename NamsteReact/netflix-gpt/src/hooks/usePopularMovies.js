import { MOVIE_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

export const usePopularMovies = ()=>{
    const dispatch =useDispatch();

    const getPopularMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', MOVIE_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }
    useEffect(()=>{
      getPopularMovies();
    },[]);
}
