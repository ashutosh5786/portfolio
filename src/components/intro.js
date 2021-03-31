// Importing the Files
import React from "react";

import Typography from "@material-ui/core/Typography";

// Importing the css
import "../style/intro.css";

export default function Intro() {
  return (
    <div name="intro" className="Default">
      <div>
        <Typography variant="h1" className="text" id="text1">
          Hi,
        </Typography>
        <Typography variant="h2" className="text" id="text2">
          I'm Ashutosh
        </Typography>
        <Typography variant="h3" className="text" id="text3">
          Tech-Savvy...<span class="blinking-cursor">|</span>
        </Typography>
      </div>
    </div>
  );
}
