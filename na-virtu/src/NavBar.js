import React, { Component } from 'react';
import { Home } from './Home';
import { MoreInfo } from './MoreInfo';
import { Login } from './Login';
import { Virtual } from './Virtual';
import { Physical } from './Physical';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"> < Home /> </li>
          <li className="navButton"> < MoreInfo /> </li>
          <li className="navButton"> < Login /> </li>
          <li className="navButton"> < Virtual /> </li>
          <li className="navButton"> < Physical /> </li>
        </ul>
      </header>
    )
  }
}
export default NavBar;