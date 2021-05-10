import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import { Container, InputGroup, FormControl } from 'react-bootstrap';

function App() {
  const [chatOpen, setChatOpen] = useState(true);
  const chatbox =  useRef(null);

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
        <Container className={chatOpen ? "chatbox-top" : "chatbox-top chatbox-top-collapsed"} 
          onClick={() => {console.log(chatOpen); setChatOpen(!chatOpen)}}
          aria-controls={chatbox}
          aria-expanded={chatOpen}
        >
              Chat
            </Container>
          <div ref={chatbox} className={chatOpen ? "chatbox-container" : "chatbox-container hidden"}>
            Testing testing
            <div className="input-container">
              <InputGroup className="input-container">
                <FormControl
                  placeholder="Enter text here"
                  aria-label="usertext-label"
                  aria-describedby="sendbtn"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="sendbtn">Send</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
