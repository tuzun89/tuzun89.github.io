import React, { Component } from "react";

export default class Readme extends Component {
  render() {
    return (
      <div className="changelog">
        <h2 className="title flash">README.md</h2>
        Personal Summary
        <div className="exp">
          <ul>
            <li className="fun">
              <div className="left">I would like to</div>
              <div className="desc">
                <ul className="desc-points">
                  <li>
                    Build good software that makes lives easier, adds value.
                  </li>
                  <li>Work with like-minded people and learn from them.</li>
                </ul>
              </div>
            </li>
            <li className="job">
              <div className="left">I am</div>
              <div className="desc">
                <ul className="desc-points">
                  <li>A multi-tasker and a passionate programmer.</li>
                  <li>
                    A programming languages, databases and DevOps enthusiast.
                  </li>
                  <li>A quick and perpetual learner.</li>
                  <li>
                    An effective leader and a good mentor. I reguarly delegate
                    work to and mentor graduate engineers.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
