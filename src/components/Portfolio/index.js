import React, { useState } from "react";

function Portfolio(props) {
  const [projects] = useState([
    {
      name: "project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ]);

  return (
    <section>
      <h1>Title</h1>
      <p>Project Description</p>
      <div></div>
    </section>
  );
}
export default Portfolio;
