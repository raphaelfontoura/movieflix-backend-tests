import { Route, Routes } from "react-router-dom"
import MovieDetail from "./MovieDetail"
import MoviesList from "./MovieList"

const Movies = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesList />} />
      <Route path=":movieId" element={<MovieDetail />} />
    </Routes>
  )
}

export default Movies
