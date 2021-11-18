import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>MovieFlix</h1>
      </div>
      <div className="navbar-logout">
        <span className="navbar-logout-text">Sair</span>
      </div>
    </nav>
  )
}

export default Navbar
