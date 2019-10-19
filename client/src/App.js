import React, { Component, useState } from "react";
import socketIOClient from "socket.io-client";
import $ from 'jquery'; 
import './App.css';

import Login from './Login/Login';
import Home from './Home/Home';
import { Route, Switch } from "react-router";
import ChatPage from "./ChatPage/ChatPage";

function App() {
  const [ currentUser, setCurrentUser ] = useState({})

  const logoutUser = event => {
    event.preventDefault()
    window.FB.logout()
  }
    return (

      <div className="App">

          {/* <ChatPage/> */}
          {
            currentUser.username ?
            <a href="#" onClick={logoutUser}>Logout</a>
            :
            <Login setCurrentUser={setCurrentUser} />
          }
          <Switch>
            <Route path='../Home/Home' render={renderProps => <Home currentUser={currentUser} {...renderProps} /> }/>
          </Switch>
        
      </div>
    );
  }


export default App;

