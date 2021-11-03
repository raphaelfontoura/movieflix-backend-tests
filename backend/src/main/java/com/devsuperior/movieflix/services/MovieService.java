package com.devsuperior.movieflix.services;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    public MovieDTO findById(Long id) {
        var movie = repository.findById(id).orElseThrow();
        return new MovieDTO(movie);
    }
}
