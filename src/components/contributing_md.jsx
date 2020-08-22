import React, { Component } from "react";

export default class Contributing extends Component {
  render() {
    return (
      <div className="changelog">
        <h2 className="title flash">CONTRIBUTING.md</h2>A selection of personal
        and academic work
        <div className="exp">
          <ul>
            <li className="event">
              <div className="left">
                <a href="https://github.com/tuzun89/tuzun89.github.io">
                  Personal portfolio
                </a>
              </div>
              <div className="desc">
                <p>
                  <a href="https://en.wikipedia.org/wiki/Single-page_application">
                    'Single Page Application'{" "}
                  </a>
                  developed using the
                  <a href="https://reactjs.org/docs/getting-started.html">
                    {" "}
                    React.js
                  </a>{" "}
                  library / framework to display and highlight key skills to
                  potential employers. <br></br>
                  <br></br>Hosted on{" "}
                  <a href="https://pages.github.com/">'GitHub Pages' </a>{" "}
                  utilising
                  <a href="https://www.redhat.com/en/topics/devops/what-is-ci-cd">
                    {" "}
                    CI/CD{" "}
                  </a>{" "}
                  through{" "}
                  <a href="https://docs.travis-ci.com/user/tutorial/">
                    TravisCI{" "}
                  </a>
                  to automate the deployment process.
                </p>
              </div>
            </li>
            <li className="job">
              <div className="left">Java Assignments</div>
              <div className="desc">
                <p>
                  Code based upon UML class diagrams - Test classes were written
                  ahead of main classes to ensure that all requirements are
                  picked up by the proposed solution. <br></br>
                  <br></br>
                  The output obtained from the test classes were collated and
                  presented as part of a report to ascertain intended program
                  functionality.
                </p>
              </div>
            </li>
            <li className="fun">
              <div className="left">XML Protocols</div>
              <div className="desc">
                <p>
                  Analysis and Discussion of XML Protocols and their
                  Applications – In depth analysis of XML, protocols based upon
                  XML (e.g. SOAP, REST) and the typical uses of the technology
                  throughout the industry with a focus on the web and security.
                </p>
              </div>
            </li>
            <li className="event">
              <div className="left">Research Methods</div>
              <div className="desc">
                <p>
                  Critical Evaluation of Research Methodologies - An analysis
                  and discussion of 2no research papers from an academic
                  perspective.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
