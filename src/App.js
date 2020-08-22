import React, { Component } from 'react';
import Summary from './components/summary'
import Readme from './components/readme_md'
import Code from './components/code'
import Contributing from './components/contributing_md'
import Speaker from './components/speaker_bio'
import Changelog from './components/changelog_md'
import Ending from './components/ending'

function App() {
  return (
    <div className="App">
      <Summary />
      <Readme />
      <Contributing />
      <Code />
      <Speaker />
      <Changelog />
      <Ending />
    </div>
  );
}

export default App;
