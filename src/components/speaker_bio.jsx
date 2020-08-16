import React, { Component } from "react";

export default class Speaker extends Component {
  render() {
    return (
      <div class="bio">
        <h2 className="title flash">@speaker_bio</h2>
        I've spoken at{" "}
        <a href="https://2017.rubyconfindia.org">RubyConfIndia 2017</a> and{" "}
        <a href="https://2017.deccanrubyconf.org/">DeccanRubyConf 2017</a>.
        Here's my bio
        <div className="exp">
          Shaunak is a Computer science graduate Student at University of
          Maryland, Baltimore-County. He has 4+ years of experience in
          developing large scale Rails based products. Introduced to Ruby 8
          years ago, it has since been his go-to language. When not working,
          you'll probably find him listening to Metallica or exploring complex
          magic systems of Brandon Sanderson's Cosmere.
        </div>
      </div>
    );
  }
}
