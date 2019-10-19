import React, { Component, useState } from "react";
import socketIOClient from "socket.io-client";
import $ from 'jquery';

// Updated. Thanks to: Paul Luna

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
            null
            :
            <Route render={renderProps => <Login setCurrentUser={setCurrentUser} {...renderProps} />} />
          }
          <Switch>
            <Route path='/chatroom' component={ChatPage} />
            <Route path='/home' render={renderProps => <Home currentUser={currentUser} {...renderProps} /> }/>
          </Switch>

      </div>
    );
  }



export default App;
