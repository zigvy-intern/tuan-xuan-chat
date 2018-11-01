import React, { Component } from 'react';
import { Link, BrowserRouter as Router, withRouter} from 'react-router-dom';
import { Meteor } from 'meteor/meteor'

import LoginContainer from '../../../containers/LoginContainer/LoginContainer';
import { on } from 'cluster';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: ''
        }
    }

    onLogin = (e) =>
    {
        e.preventDefault();   
        let password = this.refs.password.value.trim();
        let id = this.refs.userID.value.trim(); 
        Meteor.loginWithPassword({username: id}, password, (err) => {
            if(err) {
                this.setState({
                  error: err.reason
                });
              }else{
                this.setState({
                  error: ''
                });
              }
        });
        // this.props.history.push("/notification")
    }
    onSignup = (e) =>
    {
        this.props.history.push("/signup")
    }
    render() {
        let { error } = this.state;
        return (
            <Router>
                <LoginContainer>
                    <React.Fragment>
                        <div className="login-form">
                            <img className="logo" src="./assets/img/SVG/logo.svg" alt="logodchat" />
                            <p className="error">{error ? error : ''}</p>
                            <form method="POST" onSubmit={this.onLogin}>
                                <label htmlFor="username">Your ID</label>
                                <input className="text-box" type="text" ref="userID" name="userID" autoFocus required />
                                <label htmlFor="password">Password</label>
                                <input className="text-box" type="password" ref="password" name="password" maxLength={20} minLength={8} required />
                            <button className="btn btn--large btn--blue" value="login" >LOGIN</button>
                                <div className="login--option">
                                    <a href="#" className="login__link">Forgot password?</a>
                                    <input className="btn btn--medium-2 btn--pink" type="button" value="create" onClick={this.onSignup}/>
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