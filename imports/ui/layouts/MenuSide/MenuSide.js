import React, { Component } from 'react';
import Avatar from '../../components/elements/Avatar/Avatar';
import {Link} from 'react-router-dom';
class MenuSide extends Component {
    state = {  }
    render() { 
      var thisUrl="dchat";
        return (  
        <aside className="menu-container" key="nav">
        <div className="aside-nav">
          <div className="aside__logo center-inner">
            <div>
              <img src="./assets/img/SVG/logo.svg" alt="logo" />
            </div>
          </div>
          <nav>
            <ul className="nav__container">
           
              <li className="nav__icon-item">
              <Link to={`/`}>
                <div>
                  <span className="icon-bell" />
                </div>
                </Link>
              </li>
             
             
              <li className="nav__icon-item">
              <Link to={`/${thisUrl}/people`}>
                <div>
                  <span className="icon-user" />
                </div>
                </Link>
              </li>
             
              
              <li className="nav__icon-item">
              <Link to={`/${thisUrl}/conversation`}>
                <div>
                  <span className="icon-chat" />
                </div>
                </Link>
              </li>
            
             
              <li className="nav__icon-item">
              <Link to={`/${thisUrl}/appsetting`}>
                <div>
                  <span className="icon-setting" />
              </div>
              </Link>
              </li>
             
              
              <li className="nav__icon-item">
              <Link to={`/${thisUrl}/switchapp`}>
                <div>
                  <span className="icon-switch" />
                </div>
              </Link>
              </li>
             
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
       );
    }
}
 
export default MenuSide;