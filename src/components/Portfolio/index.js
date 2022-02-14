import React from "react";

function Portfolio(props) {
  const currentRepo = {
    name: "Repo 1",
    description: "SOme bullshit",
  };
  return (
    <section>
      <h1>{currentRepo.name}</h1>
      <p>{currentRepo.description}</p>
      <div>
        <img src="" alt="Site Picture" />
      </div>
    </section>
  );
}
export default Portfolio;
