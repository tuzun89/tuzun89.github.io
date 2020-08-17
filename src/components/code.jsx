import React, { Component } from "react";

export default class Code extends Component {
  render() {
    return (
      <div className="changelog">
        <h2 className="title flash">/code</h2>
        Technologies I have worked with.
        <div className="exp">
          <ul>
            <li className="fun">
              <div className="left">Languages</div>
              <div className="desc">Java, Javascript, Python, C</div>
            </li>
            <li className="job">
              <div className="left">Development Tools</div>
              <div className="desc">
                VS Code, Eclipse, Git, GitHub, Postman, CLI  (Bash & Powershell), Linux
              </div>
            </li>
            <li className="event">
              <div className="left">Front-end</div>
              <div className="desc">
                React, Sass, Html, Css
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
