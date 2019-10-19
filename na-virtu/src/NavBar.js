import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton">Home</li>
          <li className="navButton">MoreInfo</li>
          <li className="navButton">Login</li>
          <li className="navButton">Virtual</li>
          <li className="navButton">Physical</li>
        </ul>
      </header>
    )
  }
}
export default NavBar;
