package com.devsuperior.movieflix.resources.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class FieldMessage implements Serializable {

    private String fieldName, message;

}
