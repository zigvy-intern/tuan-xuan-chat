import React, { Component } from 'react';
class TopHeader extends Component {
    state = {  }
    render() { 
        return ( 
        <header className="header-container" key="header">
        <div className="menu-burger" id="menu">
          <span className="menu-line menu-line-1" />
          <span className="menu-line menu-line-2" />
          <span className="menu-line menu-line-3" />
        </div>
        <h1 className="header__heading">Switch apps</h1>
      </header> );
    }
}
 
export default TopHeader;