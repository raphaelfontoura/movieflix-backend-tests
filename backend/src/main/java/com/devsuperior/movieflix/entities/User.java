package com.devsuperior.movieflix.entities;

import lombok.Data;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Data
public class User implements Serializable {

    private Long id;
    private String name;
    private String email;
    private String password;
    private Set<Role> roles;
    private List<Review> reviews;
}
