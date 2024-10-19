import { MOVIE_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch(); 
    const getMovieVideos = async () => {
        try {
          const result = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, {...MOVIE_OPTIONS});
          if (!result.ok) {
            throw new Error(`Error: ${result.status} - ${result.statusText}`);
          }
          const data = await result.json();
          const filterData = data?.results?.filter((video) => video.type === 'Trailer');
          const trailer = filterData.length ? filterData[0] : data.results[0];
          dispatch(addTrailerVideo(trailer));
        } catch (error) {
          console.error("Failed to fetch movie trailer:", error);
        }
      };
      
      useEffect(()=>{
          getMovieVideos();
      },[])
};

export default useMovieTrailer; 