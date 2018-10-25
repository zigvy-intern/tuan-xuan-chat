import React, { Component } from 'react';
import { Link, BrowserRouter as Router, withRouter} from 'react-router-dom';
import LoginContainer from '../../../containers/LoginContainer/LoginContainer';

class LoginForm extends Component {
    state = {}

    onLogin = (e) =>
    {
        // e.preventDefault()   
        // console.log("click")
        this.props.history.push("/notification")
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
                    <form method="POST">
                        <label htmlFor="username">Your ID</label>
                        <input className="text-box" type="text" name="userID" autoFocus autoComplete="false" pattern="[A-Za-z]{8,30}" />
                        <label htmlFor="psw">Password</label>
                        <input className="text-box" type="password" name="psw" maxLength={20} minLength={8} autoComplete="off" />
                       <button className="btn btn--large btn--blue" value="login" onClick={this.onLogin}>LOGIN</button>
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