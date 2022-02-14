import React, { useState } from "react";

function Navbar(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setPortfolioSelected,
  } = props;

  return (
    <div>
      <ul>
        <li>
          <span onClick={() => setPortfolioSelected(false)}>About Me</span>
        </li>
        <li>
          <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
        </li>
        <li>
          <span>Blog</span>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
