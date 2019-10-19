import React, { useState } from 'react';

import FooterPage from './FooterPage';
import NavBar from './NavBar';

import Login from './pages/Login';
import Home from './pages/Home';
import MoreInfo from './pages/MoreInfo';
import Virtual from './pages/Virtual';
import Physical from './pages/Physical';

=======
import Login from './pages/Login';
import Home from './pages/Home';
import FooterPage from './FooterPage';
import NavBar from './NavBar';

import { Route, Switch } from "react-router";
import './App.css';

function App() {

  const [ currentUser, setCurrentUser ] = useState({})

  const [currentUser, setCurrentUser] = useState({})

  const logoutUser = event => {
    event.preventDefault()
    window.FB.logout()
  }

  return (
    <div className="App">
      <NavBar />
      {
        currentUser.username ?
        <a href="#" onClick={logoutUser}>Logout</a>
        :
        <Login setCurrentUser={setCurrentUser} />
      }
      <Switch>
        <Route path='/home' render={renderProps => <Home currentUser={currentUser} {...renderProps} /> }/>
      </Switch>
      <FooterPage />
    </div>
  );
}

export default App;
