package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository repository;
    @Autowired
    private MovieRepository movieRepository;

    public ReviewDTO insert(ReviewDTO reviewDTO, User user) {
        Review review = dtoToEntity(reviewDTO);
        review.setUser(user);
        review = repository.save(review);
        return new ReviewDTO(review);
    }

    private  Review dtoToEntity(ReviewDTO reviewDTO) {
        var movie = movieRepository.getOne(reviewDTO.getMovieId());
        var review = new Review();
        review.setText(reviewDTO.getText());
        review.setMovie(movie);
        return review;
    }
}
