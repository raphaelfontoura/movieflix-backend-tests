package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MovieDTO implements Serializable {
    private Long id;
    private String title;
    private String subTitle;
    private String year;
    private String imgUrl;
    private String synopsis;

    private GenreDTO genre;
    private List<Review> reviews = new ArrayList<>();
}
