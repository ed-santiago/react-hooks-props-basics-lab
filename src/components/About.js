import React from "react";
import Links from "./Links";

import user from "../data/user";

function About(props) {
  function displayBio() {
    if (props.bio) {
      return <p>{props.bio}</p>
    } else {
      return null
    }
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {displayBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links githubLink={user.links.github} linkedinLink={user.links.linkedin}/>
    </div>
  );
}

export default About;
