package com.devsuperior.movieflix.entities;

import lombok.Data;

import java.io.Serializable;

@Data
public class Genre implements Serializable {
    private Long id;
    private String name;

}
