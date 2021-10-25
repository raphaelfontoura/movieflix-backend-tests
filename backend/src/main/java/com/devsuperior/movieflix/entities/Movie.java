package com.devsuperior.movieflix.entities;

import lombok.Data;

import java.io.Serializable;
import java.util.Set;

@Data
public class Movie implements Serializable {
    private Long id;
    private String title;
    private String subTitle;
    private String year;
    private String imgUrl;
    private String synopsis;
    private Set<Genre> genres;
}
