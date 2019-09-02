import React, { Component } from "react";
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="nav1">
        <nav className="border">
          <div className="nav-title" >
            <h1>Hit The Trails <br /><img src="https://img.icons8.com/pastel-glyph/64/ffffff/location-update.png"></img></h1>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;