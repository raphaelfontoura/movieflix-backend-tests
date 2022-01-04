import { MovieResponse } from "core/models/Movie";
import { makePrivateRequest } from "core/utils/requests";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../Card";
import "./styles.css"

const MoviesList = () => {

  const [moviesReponse, setMoviesResponse] = useState<MovieResponse>();

  useEffect(() => {
    makePrivateRequest({ url: "/movies" }).then(
      response => setMoviesResponse(response.data)
    );
  }, []);

  return (
    <div className="movie-list-container">
      {moviesReponse?.content.map(movie =>
        <Link to={`${movie.id}`} key={movie.id} >
          <MovieCard movie={movie} />
        </Link>
      )}
    </div>
  )
}

export default MoviesList