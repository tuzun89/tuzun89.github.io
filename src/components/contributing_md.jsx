import React, { Component } from "react";

export default class Contributing extends Component {
  render() {
    return (
      <div className="changelog">
        <h2 className="title flash">CONTRIBUTING.md</h2>A few projects I worked
        on
        <div className="exp">
          <ul>
            <li className="event">
              <div className="left">
                <a href="https://github.com/tuzun89/tuzun89.github.io">Personal portfolio</a>
              </div>
              <div className="desc">
                <p>
                  <a href="https://en.wikipedia.org/wiki/Single-page_application">'Single Page Application' </a>
                  developed using the<a href="https://reactjs.org/docs/getting-started.html"> React.js</a> library / framework
                  to display and highlight key skills to potential employers.  <br></br><br></br>Hosted on <a href="https://pages.github.com/">'GitHub Pages' </a> utilising
                  <a href="https://www.redhat.com/en/topics/devops/what-is-ci-cd"> CI/CD </a> through <a href="https://docs.travis-ci.com/user/tutorial/">TravisCI </a> 
                  to automate the deployment process.
                </p>
              </div>
            </li>
            <li className="job">
              <div className="left">
                <a href="https://sell.do">Sell.do</a>
              </div>
              <div className="desc">
                <p>
                  Flagship product of{" "}
                  <a href="https://amuratech.com">
                    Amura Marketing Technologies
                  </a>{" "}
                  where I was an early employee and contributed to the Marketing
                  automation related features.
                </p>
              </div>
            </li>
            <li className="fun">
              <div className="left">
                <a href="https://shaunakpp.github.io/autovrsion">autovrsion</a>
              </div>
              <div className="desc">
                <p>
                  A prototype for an automated version control system for
                  managing configuration files like database configs, cron jobs
                  and server config files.
                </p>
              </div>
            </li>
            <li className="event">
              <div className="left">Other projects</div>
              <div className="desc">
                <p>
                  Apart from these, I have a few academic projects and a few
                  experiments which you can view{" "}
                  <a href="https://github.com/shaunakpp?utf8=%E2%9C%93&tab=repositories&q=&type=source&language=">
                    {" "}
                    here
                  </a>
                  .
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
