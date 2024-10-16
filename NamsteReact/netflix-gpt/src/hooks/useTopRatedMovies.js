import { useEffect } from "react"; 
import { addTopRatedMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS } from '../utils/constants';

export const useTopRatedMovies = () =>{
    const dispatch = useDispatch(); 

    const getTopRatedMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', MOVIE_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
      }
      useEffect(()=>{
        getTopRatedMovies();
      },[]);

}