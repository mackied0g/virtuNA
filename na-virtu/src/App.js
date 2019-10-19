import React from 'react';
import Login from './pages/Login';
import { Route, Switch } from "react-router";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
