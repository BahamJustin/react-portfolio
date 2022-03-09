import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/react-portfolio">
        <h1>Justin Baham</h1>
      </Link>
      <Link to="/Portfolio">
        <h1>Portfolio</h1>
      </Link>
      <Link to="/Contact">
        <h1>Contact Me</h1>
      </Link>
    </header>
  );
}

export default Header;
