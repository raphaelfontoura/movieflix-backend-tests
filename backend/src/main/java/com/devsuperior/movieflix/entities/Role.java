package com.devsuperior.movieflix.entities;

import lombok.Data;

import java.io.Serializable;

@Data
public class Role implements Serializable {
    public Long id;
    public String authority;
}
