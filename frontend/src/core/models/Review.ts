import { User } from "./User";

export interface Review {
  id?: string;
  text: string;
  movieId: number;
  user: User;
}