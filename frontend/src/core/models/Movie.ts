import { Review } from "./Review";

export interface Movie {
    id: number;
    title: string;
    subTitle: string;
    year: string;
    imgUrl: string;
    synopsis: string;
    genreId: number;
    reviews: Review[];
}

export type MovieResponse = {
  content: Movie[];
  totalPages: number;
  number: number;
}