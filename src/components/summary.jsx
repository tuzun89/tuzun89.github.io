import React, { Component } from "react";

export default class Summary extends Component {
  render() {
    return (
      <div className="container">
        <h1>Shaunak Pagnis</h1>
        <h2>
          Graduate Student at University of Maryland, Baltimore-County, MD.
        </h2>
        <div className="intro">
          <a href="https://internships.github.com/interns/2019/shaunak">
            Intern
          </a>{" "}
          at <a href="https://github.com">GitHub Inc.</a> and previously a Team
          Lead - Product at <a href="https://amuratech.com">Amura</a>.
        </div>
        <div className="links">
          <a href="https://github.com/shaunakpp">GitHub</a>
          <a href="https://twitter.com/_kanuahs">Twitter</a>
          <a href="https://www.linkedin.com/in/shaunak-pagnis/">LinkedIn</a>
          <a href="mailto:shaunak.pagnis@gmail.com">Email</a>
        </div>
      </div>
    );
  }
}
