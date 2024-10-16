import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle"; 

const MainContainer = () =>{
    const movies = useSelector(store => store.movies?.nowplayingMovies);
    if(!movies) return;
    const mainMovies = movies[0];
    const { original_title , overview , id } = mainMovies;
    console.log(mainMovies)
    return(
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;