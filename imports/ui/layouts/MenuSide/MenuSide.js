import React, { Component } from 'react';
import Avatar from '../../components/elements/Avatar/Avatar';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
class MenuSide extends Component {
    state = {  }
    render() { 
      var thisUrl="dchat";
        return (  
        <Router>
        <aside className="menu-container" key="nav">
        <div className="aside-nav">
          <div className="aside__logo center-inner">
            <div>
              <img src="./assets/img/SVG/logo.svg" alt="logo" />
            </div>
          </div>
          <nav>
            <ul className="nav__container">
            <Link to={`/${thisUrl}/notification`}>
              <li className="nav__icon-item">
                <div>
                  <span className="icon-bell" />
                </div>
              </li>
              </Link>
              <Link to={`/${thisUrl}/people`}>
              <li className="nav__icon-item">
                <div>
                  <span className="icon-user" />
                </div>
              </li>
              </Link>
              <Link to={`/${thisUrl}/conversation`}>
              <li className="nav__icon-item">
                <div>
                  <span className="icon-chat" />
                </div>
              </li>
              </Link>
              <Link to={`/${thisUrl}/appsetting`}>
              <li className="nav__icon-item">
                <div>
                  <span className="icon-setting" />
              </div>
              </li>
              </Link>
              <Link to={`/${thisUrl}/switchapp`}>
              <li className="nav__icon-item">
                <div>
                  <span className="icon-switch" />
                </div>
              </li>
              </Link>
            </ul>
          </nav>
          <div className="center-inner">
            <div className="aside__avatar">
            <Link to={`/${thisUrl}/profile`}>
              <Avatar color="pink" size="large" name="P"/>
              </Link>
            </div>
          </div>
        </div>
      </aside>
      </Router>
       );
    }
}
 
export default MenuSide;