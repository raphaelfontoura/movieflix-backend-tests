package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDTO implements Serializable {
    private Long id;
    private String text;
    private String user;
    private Long movieId;

    public ReviewDTO(Review entity) {
        this.id = entity.getId();
        this.text = entity.getText();
        this.user = entity.getUser().getName();
        this.movieId = entity.getMovie().getId();
    }
}
