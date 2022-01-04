import Navbar from 'core/components/Navbar';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/*" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
