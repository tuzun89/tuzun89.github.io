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
              <div className="desc">Java, C, Javascript, Python</div>
            </li>
            <li className="job">
              <div className="left">Development Tools</div>
              <div className="desc">
                VS Code, Eclipse, git, GitHub, Postman, TravisCI, Bash, Powershell
              </div>
            </li>
            <li className="event">
              <div className="left">Web Development</div>
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
