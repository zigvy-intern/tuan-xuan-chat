import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import FormInput from '../../components/elements/FromInput/FromInput';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

const history = createHistory();
class TopHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayUserName: ""
    }
  }

  componentDidMount = () => {
    if(Meteor.user()){
      let name = Meteor.user().profile.name;
      console.log(name);
      this.setState({
        displayUserName: name
      })
    }
  }

  // componentWillMount = () => {
  //   if(Meteor.user()){
  //     let name = Meteor.user().profile.name;
  //     console.log(name);
  //     this.setState({
  //       displayUserName: name
  //     })
  //   }
  // }
  
  onToggleMenu = () => {
    this.props.onToggleMenu();
  }

  onSignOut = () => {
    Meteor.logout();
    history.push('/admin');
  }

  render() {
    let group = null;
    if (this.props.group == "name" && this.props.name) {
      group = <h1 className="header__heading">{this.props.name}</h1>
    }
    else if (this.props.group == "notification"){
      group =
      <React.Fragment>
        <h1 className="header__heading">Notification</h1>
        <p className="header-right">Hi {this.state.displayUserName}</p>
      </React.Fragment>
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
          <div className="search-bar">
            <form action className="inner-addon">
              <span className="right-addon icon-search" />
              <FormInput placeholder="Search history in all conversation"/>
            </form>
            <ul>
              <li className="noti__item">
                <a className="noti__label" href="#">Online&nbsp;<span className="noti bgr-green">22</span></a></li>
            </ul>
          </div>

        </React.Fragment>
    }
    else if (this.props.group=="appsetting")
    { 
    group = 
      <React.Fragment>
      <h1 className="header__heading">App Setting</h1>

        <select className="selection-container" style={{display: 'none'}}>
        <option value="general">
          General</option>
        <option value="team-member">
          Team member</option>
        <option value="messaging">
          Messaging</option>
        <option value="appearance">
          Appearance</option>
        <option value="blocked-people">
          Blocked people
        </option>
        <option value="upgrade">
          Upgrade</option>
        <option value="billing">
          Billing</option>
      </select>

      </React.Fragment>
    }
    else if(this.props.group=="profile")
    {
    group =
      <React.Fragment>
        <h1 className="header__heading">App Setting</h1>
        <p className="header-right" onClick={this.onSignOut}><span className="icon-exit"></span><span id="sign-out">Sign out</span></p>
      </React.Fragment>
    }
    return (
      <header className="header-container" key="header">
        <div className="menu-burger" id="menu" onClick={this.onToggleMenu}>
          <span className="menu-line menu-line-1" />
          <span className="menu-line menu-line-2" />
          <span className="menu-line menu-line-3" />
        </div>
        {group}
      </header>);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleMenu: () => {
      dispatch(actions.toggleMenu());
    }
  };
}

export default connect(null, mapDispatchToProps)(TopHeader);