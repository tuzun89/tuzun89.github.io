import React, { Component } from "react";

export default class Summary extends Component {
  render() {
    return (
      <div className="container">
        <h1>Tugay Ozgen Uzunoglu</h1>
        <h2>
          Postgraduate Student at University of York, York, UK.
        </h2>
        <h2>
          Professional Structural Engineer
        </h2>
        <h2>
          Master's in Civil Engineering from Heriot-Watt University, Edinburgh, UK.
        </h2>
        <div className="intro">
          <a href="https://internships.github.com/interns/2019/shaunak">
            Intern
          </a>{" "}
          at <a href="https://github.com">GitHub Inc.</a> and previously a Team
          Lead - Product at <a href="https://amuratech.com">Amura</a>.
        </div>
        <div className="links">
          <a href="https://github.com/tuzun89">GitHub</a>
          <a href="https://twitter.com/tugayuzunoglu">Twitter</a>
          <a href="https://www.linkedin.com/in/tugayuzunoglu/">LinkedIn</a>
          <a href="mailto:to.uzunoglu@gmail.com">Email</a>
        </div>
      </div>
    );
  }
}
