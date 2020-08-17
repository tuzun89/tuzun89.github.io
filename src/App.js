import React from 'react';
import logo from './logo.svg';
import './App.css';
import Summary from './components/summary'
import Readme from './components/readme_md'
import Code from './components/code'
import Contributing from './components/contributing_md'
import Speaker from './components/speaker_bio'
import Changelog from './components/changelog_md'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
