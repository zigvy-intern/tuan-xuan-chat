import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="menu-burger" id="menu">
          <span className="menu-line menu-line-1" />
          <span className="menu-line menu-line-2" />
          <span className="menu-line menu-line-3" />
        </div>
        <h1 className="header__heading">Switch apps</h1>
      </header>
    );
  }
}
