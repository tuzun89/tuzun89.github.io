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
              <div className="desc">Ruby, Javascript, Python, C</div>
            </li>
            <li className="job">
              <div className="left">Databases</div>
              <div className="desc">
                MongoDb, MySQL, PostGreSQL, Redis, ElasticSearch, DynamoDb
              </div>
            </li>
            <li className="event">
              <div className="left">Front-end</div>
              <div className="desc">
                jQuery, Backbone.js, Marionette.js, React
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
