import React from "react";

import { ExternalLink } from "react-external-link";

import Resume from "../../Resume.pdf";

function Footer() {
  return (
    <footer>
      <p>Contact Info:</p>
      <p>bahamjustin@outlook.com</p>
      <p>303-720-5260</p>
      <p>
        <ExternalLink href="https://github.com/BahamJustin">
          Github{" "}
        </ExternalLink>
      </p>
      <p>
        <a href={Resume} target="_blank">
          Resume
        </a>
      </p>
    </footer>
  );
}

export default Footer;
