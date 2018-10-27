import React, { Component } from 'react';
import { Link, BrowserRouter as Router, withRouter} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'

import LoginContainer from '../../../containers/LoginContainer/LoginContainer';
import { on } from 'cluster';

class LoginForm extends Component {
    state = {}

    onLogin = (e) =>
    {
        e.preventDefault();   
        let password = this.refs.password.value.trim();
        let id = this.refs.userID.value.trim(); 
        Meteor.loginWithPassword({username: id}, password, (err) => {
            console.log('Login callback', err);
        });
        // this.props.history.push("/notification")
    }
    onSignup = (e) =>
    {
        // e.preventDefault()   
        // console.log("click")
        this.props.history.push("/signup")
    }
    render() {
        return (
            <Router>
            <LoginContainer>
            <React.Fragment>
                <div className="login-form">
                    <img className="logo" src="./assets/img/SVG/logo.svg" alt="logodchat" />
                    <form method="POST" onSubmit={this.onLogin}>
                        <label htmlFor="username">Your ID</label>
                        <input className="text-box" type="text" ref="userID" name="userID" autoFocus autoComplete="false" />
                        <label htmlFor="password">Password</label>
                        <input className="text-box" type="password" ref="password" name="password" maxLength={20} minLength={8} autoComplete="off" />
                       <button className="btn btn--large btn--blue" value="login" >LOGIN</button>
                        <div className="login--option">
                            <a href="#" className="login__link">Forgot password?</a>
                            <Link to={`/signup`}><input className="btn btn--medium-2 btn--pink" type="button" value="create" onClick={this.onSignup} /></Link>
                        </div>
                    </form>
                </div>
            
            </React.Fragment>
            </LoginContainer>
            </Router>
        );
    }
}

export default withRouter(LoginForm);