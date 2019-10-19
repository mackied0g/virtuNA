import React, { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import { Route, Switch } from "react-router";
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({})

  return (
    <div className="App">
      Welcome, {currentUser.username}
      <a href="#" onClick={(e)=>{e.preventDefault(); window.FB.logout()}}>logout</a>
      <Switch>
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} /> }/>
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
