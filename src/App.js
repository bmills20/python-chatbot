import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

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
        <Container className="chatbox-container">
          <Container className="chatbox-top">
            Chat
          </Container>
        </Container>
      </header>
    </div>
  );
}

export default App;
