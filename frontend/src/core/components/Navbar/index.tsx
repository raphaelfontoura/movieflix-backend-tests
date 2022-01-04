import './styles.css';

import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [username, setUsername] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentUserData = getAccessTokenDecoded();
    setUsername(currentUserData.user_name);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>MovieFlix</h1>
      </div>
      <div onClick={handleLogout} className={`navbar-logout ${username ? "" : "display-none"}`}>
        <span className="navbar-logout-text">Sair</span>
      </div>
    </nav>
  )
}

export default Navbar
