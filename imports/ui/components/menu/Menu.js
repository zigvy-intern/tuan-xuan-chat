import React, { Component } from "react";

export default class Menu extends Component {
    render(){
        return(
            <aside className="menu-container">
          <div className="aside-nav">
            <div className="aside__logo center-inner">
              <a href="#">
                <img src="./assets/img/SVG/logo.svg" alt="logo" />
              </a>
            </div>
            <nav>
              <ul className="nav__container">
                <li className="nav__icon-item">
                  <a href="notification.html">
                    <span className="icon-bell" />
                  </a>
                </li>
                <li className="nav__icon-item">
                  <a href="people-2.html">
                    <span className="icon-user" />
                  </a>
                </li>
                <li className="nav__icon-item">
                  <a href="layout.html">
                    <span className="icon-chat" />
                  </a>
                </li>
                <li className="nav__icon-item">
                  <a href="appsetting.html">
                    <span className="icon-setting" />
                  </a>
                </li>
                <li className="nav__icon-item active">
                  <a href="switchapps.html">
                    <span className="icon-switch" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="center-inner">
              <div className="aside__avatar">
                {" "}
                <a
                  className="avatar avatar--large bgr-cyan"
                  href="profile-member.html"
                >
                  {" "}
                  T
                </a>
              </div>
            </div>
          </div>
        </aside>
        );
    }
}