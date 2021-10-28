package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class GenreDTO implements Serializable {

    private Long id;
    private String name;
    private final Set<Movie> movies = new HashSet<>();

    public GenreDTO(Genre entity) {
        this.id = entity.getId();
        this.name = entity.getName();
    }
}
