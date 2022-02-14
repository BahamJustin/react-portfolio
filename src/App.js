import React, { useState } from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  return (
    <div>
      <header>
        <h1>Justin Baham</h1>
        <Navbar
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
        ></Navbar>
      </header>
      <main>
        {!portfolioSelected ? (
          <>
            <AboutMe></AboutMe>
          </>
        ) : (
          <Portfolio></Portfolio>
        )}
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
