// Updated. Thanks to: Paul Luna
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import $ from 'jquery'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "localhost:4001",
      color: 'white',

    };
    let username = "";
  }

  // sending sockets
//   send = () => {
//     const socket = socketIOClient(this.state.endpoint);
//     socket.emit('change color', this.state.color) // change 'red' to this.state.color
//   }
  ///

  // adding the function
  setColor = (color) => {
    this.setState({ color })
  }

  componentDidMount () {
    //   const socket = socketIOClient(this.state.endpoint);
    //   setInterval(this.send(), 1000)
    //   socket.on('change color', (col) => {
    //       document.body.style.backgroundColor = col1222
    //   })
    const socket = socketIOClient(this.state.endpoint);
            // submit text message without reload/refresh the page
            $('form').submit(function(e){
                e.preventDefault(); // prevents page reloading
                socket.emit('chat_message', $('#txt').val());
                $('#txt').val('');
                return false;
            });
            // append the chat text message
            socket.on('chat_message', function(msg){
                $('#messages').append($('<p>').html(msg));
            });
            // append text if someone is online
            socket.on('is_online', function(username) {
                $('#messages').append($('<p>').html(username));
            });
            // ask username
            let username = prompt('Please tell me your name');
            socket.emit('username', username);
  }

  render() {
    // testing for socket connections

    const socket = socketIOClient(this.state.endpoint);

    return (
      <div style={{ padding:"20px", fontSize:"16px" }}>
        <p id="messages"></p>
            <form action="/" method="POST" id="chatForm">
             
                    <input style={{width:"100%", height:"20px"}} id="txt" autoComplete="off" autoFocus="on" placeholder="type your message here..." />
                    <p><button style={{fontSize:"16px", color:"black", width:"100%", height:"40px", backgroundColor:"#83A8BF", border:"0"}}>Send</button></p>
            </form>
      </div>
    )
  }
}
export default App;