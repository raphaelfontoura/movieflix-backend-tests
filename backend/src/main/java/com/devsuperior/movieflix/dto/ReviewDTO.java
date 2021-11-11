package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDTO implements Serializable {
    private Long id;
    @NotBlank
    private String text;
    private UserDTO user;
    @NotNull
    private Long movieId;

    public ReviewDTO(Review entity) {
        this.id = entity.getId();
        this.text = entity.getText();
        this.user = new UserDTO(entity.getUser());
        this.movieId = entity.getMovie().getId();
    }
}
