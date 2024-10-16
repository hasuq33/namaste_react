import MovieCard from "./MovieCard"; 

const MovieList = ({title , movies}) => {
  
  return movies&&(
    <div className="p-6 bg-transparent">
      <h1 className="text-4xl font-bold py-2 text-white ">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar" >
            <div className="flex ">
                {movies.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList