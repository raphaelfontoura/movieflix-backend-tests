import PrivateRoute from "core/components/PrivateRoute/PrivateRoute"
import { Route, Routes } from "react-router-dom"
import MovieDetail from "./MovieDetail"
import MoviesList from "./MovieList"

const Movies = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="" element={<MoviesList />} />
        <Route path=":movieId" element={<MovieDetail />} />
      </Route>   
    </Routes>
  )
}

export default Movies
