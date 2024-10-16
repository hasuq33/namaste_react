import { MOVIE_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch(); 
    const getMovieVideos = async () =>{
        const result =  await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,MOVIE_OPTIONS); 
        const data = await result.json();
        console.log(data);
        const filterData = data.results.filter((video) => video.type === 'Trailer');
        const trailer = filterData.length ? filterData[0] : data.results[0];
        dispatch(addTrailerVideo(trailer));
      };
  
      useEffect(()=>{
          getMovieVideos();
      },[])
};

export default useMovieTrailer; 