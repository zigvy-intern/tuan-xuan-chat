import React, { Component } from 'react';
import Avatar from '../../components/elements/Avatar/Avatar';
import {Link, Route} from 'react-router-dom';

const mainURL="dchat";
const listMenu = [
  {
    name: 'Notification',
    to: '/notification',
    icon: 'icon-bell',
    exact: false
  },
  {
    name: 'People',
    to:  '/people',
    icon: 'icon-user',
    exact: false
  },
  {
    name: 'Conversation',
    to:  '/conversation',
    icon: 'icon-chat',
    exact: false
  },
  {
    name: 'App Setting',
    to: '/appsetting',
    icon: 'icon-setting',
    exact: false
  },
  {
    name: 'Switch Apps',
    to: '/switchapps',
    icon: 'icon-switch',
    exact: false
  },
];

const MenuLink = ({to, icon, activeOnlyWhenExact}) => {
  return(
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({match})=>{
        var active = match ? 'active' : '';
        return(
          <li className={`nav__icon-item ${active}`}>
                <Link to={to}>
                  <span className={icon} />
                </Link>
          </li>
        );
      }}
    />
  );
}
class MenuSide extends Component {
    state = {  }
   
      showMenu = (listMenu) => {
        var result = null;
        if(listMenu.length > 0){
          result = listMenu.map((menu,index)=>{
            return(
              <MenuLink
                key={index}
                to={menu.to}
                icon={menu.icon}
                exact={menu.exact}
              />
            );
          });
        }
        return result;
      }
      render() {
        let admin = JSON.parse(localStorage.getItem('admin'));
        return (
          <aside className="menu-container">
            <div className="aside-nav">
              <div className="aside__logo center-inner">
                <Link to="/notification">
                  <img src="./assets/img/SVG/logo.svg" alt="logo" />
                </Link>
              </div>
              <nav>
                <ul className="nav__container">
                  {this.showMenu(listMenu)}
                </ul>
              </nav>
          <div className="center-inner">
            <div className="aside__avatar">
            <Link to={`/profile`}>
              <Avatar color={admin.profile.color} size="large" name={admin.profile.name}/>
              </Link>
            </div>
          </div>
        </div>
      </aside>
       );
    }
}
 
export default MenuSide;