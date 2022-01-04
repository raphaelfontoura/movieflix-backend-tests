import { Movie } from "core/models/Movie"
import "./styles.css";

type Props = {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-container">
      <img className="movie-img" src={movie.imgUrl} alt={movie.title} />
      <div className="movie-data">
        <h3 className="movie-title">{movie.title}</h3>
        <span className="movie-year">{movie.year}</span>
        <h5 className="movie-subtitle">{movie.subTitle}</h5>
      </div>
    </div>
  )
}

export default MovieCard
