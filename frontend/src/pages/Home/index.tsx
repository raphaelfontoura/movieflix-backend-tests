
import ImageHome from 'core/assets/img/home-image.svg';
import Login from 'pages/Home/Login';
import "./styles.css";


function Home() {
  return (
    <>
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
        <div>
          <Login />
        </div>
      </div>
    </>
  )
}

export default Home
