import './styles.css';

import { Movie } from 'core/models/Movie';
import { makePrivateRequest } from 'core/utils/requests';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReviewItem from '../ReviewItem';
import ReviewForm from '../ReviewForm';
import { getAccessTokenDecoded } from 'core/utils/auth';



type ParamsId = {
  movieId: string;
}

const MovieDetail = () => {

  const [movie, setMovie] = useState<Movie>();
  const { movieId } = useParams<ParamsId>();

  const getMovies = useCallback(() => {
    makePrivateRequest({ url: `/movies/${movieId}` })
      .then(response => {
        setMovie(response.data);
      });
  }, [movieId])

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const handleInputReview = (input: string) => {
    if (input) {
      const data = {
        text: input,
        movieId: movieId
      };
      makePrivateRequest({ url: "/reviews", method: "POST", data })
        .then(_response => {
          getMovies();
        });
    }
  }

  return (
    <div className="movie-detail-main">
      <div className="movie-detail-data card-container-shadow">
        <img className="movie-info-image" src={movie?.imgUrl} alt={movie?.title} />
        <div className="movie-info">
          <h1 className="movie-info-title">{movie?.title}</h1>
          <span className="movie-info-year">{movie?.year}</span>
          <h3 className="movie-info-subtitle">{movie?.subTitle}</h3>
          <div className="movie-info-synopsis">
            <p>{movie?.synopsis}</p>
          </div>
        </div>
      </div>

      {getAccessTokenDecoded().authorities.includes("ROLE_MEMBER") && (
        <div className="movie-detail-review-form">
          <ReviewForm handleInputReview={handleInputReview} />
        </div>
      )}

      {(movie?.reviews !== undefined && movie?.reviews.length > 0) && (
        <div className="movie-detail-reviews card-container-shadow">
          {movie?.reviews.map(review =>
            <ReviewItem review={review} key={review.id} />
          )}
        </div>
      )}

    </div>
  )
}

export default MovieDetail
