import React, { Component } from 'react';
import Avatar from '../../components/elements/Avatar/Avatar';
class MenuSide extends Component {
    state = {  }
    render() { 
        return (  <aside className="menu-container" key="nav">
        <div className="aside-nav">
          <div className="aside__logo center-inner">
            <a href="#">
              <img src="./assets/img/SVG/logo.svg" alt="logo" />
            </a>
          </div>
          <nav>
            <ul className="nav__container">
              <li className="nav__icon-item">
                <a href="#">
                  <span className="icon-bell" />
                </a>
              </li>
              <li className="nav__icon-item">
                <a href="#">
                  <span className="icon-user" />
                </a>
              </li>
              <li className="nav__icon-item">
                <a href="#">
                  <span className="icon-chat" />
                </a>
              </li>
              <li className="nav__icon-item">
                <a href="#">
                  <span className="icon-setting" />
                </a>
              </li>
              <li className="nav__icon-item active">
                <a href="#">
                  <span className="icon-switch" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="center-inner">
            <div className="aside__avatar">
              <Avatar color="pink" size="large" name="P"/>
            </div>
          </div>
        </div>
      </aside>
       );
    }
}
 
export default MenuSide;