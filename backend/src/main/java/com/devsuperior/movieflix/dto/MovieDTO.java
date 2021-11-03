package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class MovieDTO implements Serializable {
    private Long id;
    private String title;
    private String subTitle;
    private String year;
    private String imgUrl;
    private String synopsis;

    private Long genreId;
    private List<ReviewDTO> reviews = new ArrayList<>();

    public MovieDTO(Movie entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.subTitle = entity.getSubTitle();
        this.year = entity.getYear();
        this.imgUrl = entity.getImgUrl();
        this.synopsis = entity.getSynopsis();
        this.genreId = entity.getGenre().getId();
        this.reviews = entity.getReviews().stream().map(ReviewDTO::new).collect(Collectors.toList());
    }
}
