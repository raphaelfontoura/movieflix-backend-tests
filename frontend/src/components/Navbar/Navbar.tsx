import React from 'react';
import 'components/Navbar/Navbar.component.css';

const Navbar = () => (
  <nav className="navbar" data-testid="Navbar">
    <div className="navbar-title">

      <h1 >MovieFlix</h1>
    </div>
    <div className="navbar-logout">
      <a href="#">Sair</a>
    </div>
  </nav>
);

export default Navbar;
