import React, { useState } from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <header>
        <h1>Justin Baham</h1>
        <Navbar></Navbar>
      </header>
      <main></main>
      <Portfolio></Portfolio>
      <footer>Contact Info:</footer>
    </div>
  );
}

export default App;
