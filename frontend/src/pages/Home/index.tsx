import Navbar from '../../components/Navbar';
import ImageHome from 'assets/img/home-image.svg';
import "./styles.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-presentation">
          <h1 className="home-presentation-title">
            Avalie Filmes
          </h1>
          <p className="home-presentation-text">
            Diga o que você achou do seu filme favorito
          </p>
          <img src={ImageHome} 
            alt="Imagem da página Home" 
            className="home-presentation-img" />
        </div>
        <div className="login-form">
          <h1 className="login-title">Login</h1>
          <input type="text" className="login-input" />
          <input type="password" className="login-input" />
          <button className="login-button" type="button">Login</button>
        </div>
      </div>
    </>
  )
}

export default Home
