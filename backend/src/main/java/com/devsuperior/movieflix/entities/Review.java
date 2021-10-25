package com.devsuperior.movieflix.entities;

import lombok.Data;

import java.io.Serializable;

@Data
public class Review implements Serializable {
    private Long id;
    private String text;
    private User user;
}
