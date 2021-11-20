import React, { Component } from "react";

export default class Summary extends Component {
  render() {
    return (
      <div className="container">
        <h1>Tugay Özgen Uzunoğlu</h1>
        <h2>
          MSc Computer Science at University of York, UK.
        </h2>
        <h2>
          MEng Civil Engineering from Heriot-Watt University in Edinburgh, UK.
        </h2>
        <div className="intro">
          Currently a Structural Engineer at <a href="https://www.elliottwood.co.uk/" rel="noopener noreferrer" target="_blank">ElliotWood </a> 
          and previously employed at the same capacity at <a href="http://clancy.co.uk/" rel="noopener noreferrer" target="_blank">CCL </a> 
          abd also at <a href="https://www.aksward.com/" rel="noopener noreferrer" target="_blank">AKSW</a>.
          <p>An aspiring  Software Developer - looking for opportunities at a Junior level.</p>
        </div>
        <div className="links">
          <a href="https://github.com/tuzun89" rel="noopener noreferrer" target="_blank">GitHub</a>
          <a href="https://twitter.com/tugayuzunoglu" rel="noopener noreferrer" target="_blank">Twitter</a>
          <a href="https://www.linkedin.com/in/tugayuzunoglu/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
          <a href="mailto:to.uzunoglu@gmail.com">Email</a>
        </div>
      </div>
    );
  }
}
