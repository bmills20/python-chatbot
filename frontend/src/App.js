import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import { Container, InputGroup, FormControl } from 'react-bootstrap';
import axios from "axios";

function App() {
  const [chatOpen, setChatOpen] = useState(true);
  const chatbox =  useRef(null);
  const [chatList, setChatList] = useState([]);
  const [currQuery, setCurrQuery] = useState("");

  const refreshChat = () => {
    axios
      .get("/api/chatbots")
      .then((res) => setChatList(res.data))
      .catch((err) => console.log(err));
  };

  const updateQuery = ({target}) => {
    setCurrQuery(target.value);
  }

  const handleSend = (event) => {
    // 'Enter' event charcode
    if(event.charCode === 13) {
/*       console.log("enter",event.target.value,currQuery); */

      // Update chat 'history' array
      setChatList(chatList => chatList.concat(currQuery));
      event.target.value = "";

      
    }
  }

  useEffect(() => {
    refreshChat()
  });

  const chatbotItems = [
  {
    id: 1,
    botname: "Bobbyt",
    message: "Yo",
  },
  {
    id: 2,
    botname: "Bobbyg",
    message: "Whattaup",
  },

];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {chatbotItems.map((item) => (
            <p>
              {item.botname}:&nbsp;
              {item.message}
              
            </p>
          ))}
          

        </ul>
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
            <ul>
              {chatList.map((msg) => (
                <p>
                  {msg}
                </p>
              ))}
            </ul>
            <div className="input-container">
              <InputGroup className="input-container">
                <FormControl
                  placeholder="Enter text here"
                  aria-label="usertext-label"
                  aria-describedby="sendbtn"
                  onChange={updateQuery}
                  onKeyPress={handleSend}
                />
                <InputGroup.Append>
                  <InputGroup.Text onClick={() => console.log(chatList)} id="sendbtn">Send</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
