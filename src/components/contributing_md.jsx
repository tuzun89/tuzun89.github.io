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
                <a href="https://classroom.github.com">GitHub Classroom</a>
              </div>
              <div className="desc">
                <p>
                  <a href="https://education.github.com">GitHub Education's</a>{" "}
                  teacher focused product for distributing programming
                  assignments to students. I helped refactoring the assignment
                  creation process and made performance improvements. More
                  details on{" "}
                  <a href="https://github.blog/2019-08-27-github-classroom-gets-a-reliability-and-performance-boost/">
                    this blog post
                  </a>
                  .
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
