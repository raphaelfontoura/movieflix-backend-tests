import Pagination from "core/components/Pagination";
import { Genre } from "core/models/Genre";
import { MovieResponse } from "core/models/Movie";
import { makePrivateRequest } from "core/utils/requests";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../Card";
import GenreFilter from "../Filter";
import "./styles.css"


const MoviesList = () => {

  const [moviesReponse, setMoviesResponse] = useState<MovieResponse>();
  const [genre, setGenre] = useState<Genre>();
  const [activePage, setActivePage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = useCallback(() => {
    const params = {
      page: activePage,
      size: 6,
      genreId: genre?.id
    }
    setIsLoading(true);
    try {
      makePrivateRequest({ url: "/movies", params })
      .then(
        response => setMoviesResponse(response.data)
      )
      .finally(() => {
        setIsLoading(false);
      });
    } catch(err) {
      console.error(err);
    }
  }, [activePage, genre])

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const handleChangeGenre = (genre: Genre) => {
    setActivePage(0);
    setGenre(genre);
  }

  return (
    <div className="movie-list-main">
      <GenreFilter genre={genre} handleChangeGenre={handleChangeGenre}/>
      <div className="movie-list-container">
        {moviesReponse?.content.map(movie =>
          <Link to={`${movie.id}`} key={movie.id} >
            <MovieCard movie={movie} />
          </Link>
        )}
      </div>

      {moviesReponse && (
        <Pagination
          totalPages={moviesReponse.totalPages}
          activePage={activePage}
          onChange={page => setActivePage(page)}
        />
      )}

    </div>
  )
}

export default MoviesList