import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import $ from 'jquery'; 
<<<<<<< HEAD
// Updated. Thanks to: Paul Luna
=======
import './App.css';
import ChatPage from "./ChatPage/ChatPage";
>>>>>>> c6f1f23533775f4b509554013f7d1b8edfcd146a

function App() {
    return (
<<<<<<< HEAD
      <div style={{ padding:"20px", fontSize:"16px" }}>
        <p id="messages"></p>
            <form action="/" method="POST" id="chatForm">

                    <input style={{width:"100%", height:"20px"}} id="txt" autoComplete="off" autoFocus="on" placeholder="type your message here..." />
                    <p><button style={{fontSize:"16px", color:"black", width:"100%", height:"40px", backgroundColor:"#83A8BF", border:"0"}}>Send</button></p>
            </form>
=======
      <div className="App">
          {/* <ChatPage/> */}
>>>>>>> c6f1f23533775f4b509554013f7d1b8edfcd146a
      </div>
    );
  }
<<<<<<< HEAD
}
export default App;
=======
  
  export default App;
>>>>>>> c6f1f23533775f4b509554013f7d1b8edfcd146a
