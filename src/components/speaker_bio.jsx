import React, { Component } from "react";

export default class Speaker extends Component {
  render() {
    return (
      <div className="bio">
        <h2 className="title flash">~$ ls keySkills </h2>
        Here's my bio
        <div className="exp">
          Tugay is currently employed as a structural engineer in London, UK and
          has 7 years of experience designing buildings throughout the UK. He is
          also a computer science postgraduate student at the University of
          York. Tugay spends his spare time working on personal programming
          projects in order to fully understand the software engineering design
          process from the ground up while focusing on fundamental computer
          science principles.
        </div>
      </div>
    );
  }
}
