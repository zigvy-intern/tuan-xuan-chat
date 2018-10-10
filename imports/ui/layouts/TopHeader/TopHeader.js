import React, { Component } from 'react';
class TopHeader extends Component {
  state = {}
  render() {
    let group = null;
    if (this.props.group == "name" && this.props.name) {
      group = <h1 className="header__heading">{this.props.name}</h1>
    }
    else if (this.props.group == "people") {
      group = <React.Fragment>
        <div className="header-wapper people">
          <div className="header-left">
            <h1 className="header__heading">PEOPLE</h1>
            <button className="header-btn--export ">
              <span className="icon-export" />
              Export
             </button>
          </div>
          <div className="header-right">
            <button className="header-btn--attributes">
              <span className="icon-attributes" />
              Attributes
             </button>
          </div>
        </div>

      </React.Fragment>
    }
    else if (this.props.group == "conversation") {
      group =
        <React.Fragment>
          <div className="notification">
            <ul className="noti__list">
              <li className="noti__item">
                <a className="avatar avatar--medium bgr-cyan" href="#">T</a>
                <a className="noti__label" href="#">Me&nbsp;<span className="noti bgr-red">5</span></a>
              </li>
              <li className="noti__item">
                <a className="noti__label" href="#">Unassigned&nbsp;<span className="noti invisible">15</span></a>
              </li>
              <li className="noti__item">
                <a className="noti__label" href="#">All&nbsp;<span className="noti bgr-red">10</span></a>
              </li>
              <li className="noti__item hidden-md">
                <a className="noti__label" href="#"><span className="icon-bell" /><span className="noti bgr-red">22</span></a>
              </li>
              <li className="noti__item hidden-md">
                <a className="noti__label" href="#">Online&nbsp;<span className="noti bgr-green">22</span></a>
              </li>
            </ul>
          </div>
        </React.Fragment>
    }
    return (
      <header className="header-container" key="header">
        <div className="menu-burger" id="menu">
          <span className="menu-line menu-line-1" />
          <span className="menu-line menu-line-2" />
          <span className="menu-line menu-line-3" />
        </div>
        {group}
      </header>);
  }
}

export default TopHeader;